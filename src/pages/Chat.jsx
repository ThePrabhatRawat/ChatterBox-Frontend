import React, { useRef } from "react";
import AppLayouts from "../components/Layouts/AppLayouts";
import { Stack, IconButton } from "@mui/material";
import { grayColor, orange } from "../../constants/Color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/dialog/FileMenu";
import { sampleMessage } from "../../constants/SampleData";
import MessageComponent from "../components/shared/MessageComponent";
function Chat() {
  const containerRef = useRef(null);
  const user = {
    _id:"sdsfds",
    name:"Prabhat Rawat",
  }
  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {
          sampleMessage.map((i)=>(
            <MessageComponent key={i._id} message={i} user={user}/>
          ))
        }
      </Stack>
      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton sx={{
            position:"absolute",
            left:"1.5rem",
            "&:hover":{
              rotate:"-30deg"
            }
          }}>
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type Message Here" />
          <IconButton type="submit" sx={{
            backgroundColor : orange,
            marginLeft:"1rem",
            color:"white",
            padding:"0.5rem",
            "&:hover":{
              bgcolor:"error.dark",
              rotate:"-30deg",
              
            }
          }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu/>
    </>
  );
}

export default AppLayouts()(Chat);
