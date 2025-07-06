import { useState, useEffect, useRef } from "react";
import { Box, Button, TextField, Typography, Stack, IconButton, Paper } from "@mui/material";
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
  const chatRef = useRef<HTMLDivElement>(null);
  const [typingDots, setTypingDots] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  const startTypingAnimation = () => {
    let count = 0;
    const interval = setInterval(() => {
      setTypingDots(".".repeat((count % 3) + 1));
      count++;
    }, 500);

    (window as any).typingInterval = interval;
  };

  const stopTypingAnimation = () => {
    clearInterval((window as any).typingInterval);
    setTypingDots("");
  };

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => setAnimate(true), 50);
  };

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => setOpen(false), 200);
  };

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

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      {!open && (
        <IconButton
          onClick={handleOpen}
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            bgcolor: "red",
            color: "white",
            "&:hover": { bgcolor: "darkred" },
          }}
        >
          <ChatIcon />
        </IconButton>
      )}

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
                    dangerouslySetInnerHTML={{ __html: msg.text === "..." || msg.text === "." || msg.text === ".." ? typingDots : msg.text }}
                  />
                </Paper>
              </Stack>
            ))}

            <div ref={messagesEndRef} />
          </Box>

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
