import { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  IconButton,
  Paper,
  Tooltip,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { getFakeResponse } from "../utils/chatbotResponses";

interface Message {
  sender: "user" | "ai";
  text: string;
}

export const FloatingChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [animate, setAnimate] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const chatRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [typingDots, setTypingDots] = useState("");

  // Handle sending a message
  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const typingMsg: Message = { sender: "ai", text: "..." };
    setMessages((prev) => [...prev, typingMsg]);

    startTypingAnimation();

    setTimeout(() => {
      stopTypingAnimation();
      const aiMsg: Message = { sender: "ai", text: getFakeResponse(input) };

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = aiMsg;
        return updated;
      });
    }, 1500);
  };

  // Starts animated dots while AI is "typing"
  const startTypingAnimation = () => {
    let count = 0;
    const interval = setInterval(() => {
      setTypingDots(".".repeat((count % 3) + 1));
      count++;
    }, 500);

    (window as any).typingInterval = interval;
  };

  // Stops animated dots
  const stopTypingAnimation = () => {
    clearInterval((window as any).typingInterval);
    setTypingDots("");
  };

  // Opens chat and begins animation
  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => setAnimate(true), 50);
  };

  // Closes chat with fade-out effect
  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => setOpen(false), 200);
  };

  // Automatically closes chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Scrolls to the latest message when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Automatically hide tooltip after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Chat Icon */}
      {!open && (
        <Box
          sx={{
            position: "fixed",
            bottom: 20,
            right: 12,
            zIndex: 1000,
          }}
        >
          <Tooltip
            title="Ask me anything about my portfolio!"
            open={showTooltip}
            placement="left"
            arrow
            slotProps={{
              tooltip: {
                sx: {
                  fontSize: "0.85rem",
                  maxWidth: 200,
                },
              },
              popper: {
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, 8],
                    },
                  },
                ],
              },
              transition: {
                timeout: 800, 
              },
            }}
          >

            <Box
              sx={{
                position: "relative",
                width: 56,
                height: 56,
                right: 20
              }}
            >
              {/* Ping Animation */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  bgcolor: "rgba(255, 0, 0, 0.4)",
                  animation: "ping 2s infinite ease-out",
                  zIndex: 0,
                }}
              />
              {/* Icon Button */}
              <IconButton
                id="chat-icon"
                onClick={handleOpen}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  bgcolor: "red",
                  color: "white",
                  "&:hover": { bgcolor: "darkred" },
                  boxShadow: 6,
                  zIndex: 1,
                }}
              >
                <ChatIcon />
              </IconButton>
            </Box>
          </Tooltip>
        </Box>
      )}

      {/* Chat Window */}
      {open && (
        <Box
          ref={chatRef}
          sx={{
            position: "fixed",
            bottom: 20,
            right: { xs: "5%", sm: 20 },
            width: { xs: "90%", sm: 320 },
            maxWidth: 320,
            bgcolor: "#1a1a1a",
            color: "white",
            p: 2,
            borderRadius: 2,
            boxShadow: 5,
            display: "flex",
            flexDirection: "column",
            height: animate ? 400 : 0,
            opacity: animate ? 1 : 0,
            overflow: "hidden",
            transition: "height 0.3s ease, opacity 0.3s ease",
            zIndex: 1001,
          }}
        >
          <Typography variant="h6" color="primary" mb={1}>
            Ask About My Portfolio
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              bgcolor: "#121212",
              p: 1,
              borderRadius: 1,
              mb: 1,
            }}
          >
            {messages.map((msg, idx) => (
              <Stack
                key={idx}
                direction="row"
                justifyContent={msg.sender === "user" ? "flex-end" : "flex-start"}
                sx={{ mb: 1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    maxWidth: "70%",
                    p: 1,
                    bgcolor:
                      msg.sender === "user"
                        ? "#2979ff"
                        : msg.text === "..." || msg.text === "." || msg.text === ".."
                        ? "#616161"
                        : "#424242",
                    color: "white",
                    borderRadius: 2,
                    fontStyle:
                      msg.text === "..." || msg.text === "." || msg.text === ".."
                        ? "italic"
                        : "normal",
                  }}
                >
                  <Typography
                    variant="body2"
                    dangerouslySetInnerHTML={{
                      __html:
                        msg.text === "..." || msg.text === "." || msg.text === ".."
                          ? typingDots
                          : msg.text,
                    }}
                  />
                </Paper>
              </Stack>
            ))}
            <div ref={messagesEndRef} />
          </Box>

          {/* Input Area */}
          <Stack direction="row" spacing={1}>
            <TextField
              size="small"
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type something..."
              sx={{
                bgcolor: "white",
                borderRadius: 1,
                "& .MuiInputBase-input": {
                  color: "black",
                },
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <Button variant="contained" color="error" onClick={handleSend}>
              Send
            </Button>
          </Stack>
        </Box>
      )}
    </>
  );
};
