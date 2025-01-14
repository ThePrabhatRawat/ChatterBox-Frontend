import {
  Avatar, Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import React, { memo } from "react";

import { sampleNotifications } from "../../../constants/SampleData";
const Notifications = () => {

  const friendRequestHandler = ({_id , accept})=>{
    // friend request handler
  }

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>
        {
          sampleNotifications.length > 0 ? (
            sampleNotifications.map((i)=>(
              <NotificationItem sender={i.sender} key={i._id} _id={i._id} handler={friendRequestHandler}/>
            ))
          ): (<Typography textAlign={"center"} > 0 Notifications</Typography>)
        }
      </Stack>
    </Dialog>
  );
};
const NotificationItem = memo(({sender , _id, handler})=>{
  return (
    <ListItem>
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} width={"100%"}>
        <Avatar src={sender.avatar} />
        <Typography variant="body1" sx={{
            flexGrow:1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxorient: "vertical",
            overflow: "hidden",
            textoverflow: "ellipsis",
            width:"100%"
        }} >{`${sender.name} sent you a friend request`} </Typography>
        <Stack direction={{
          xs:"column",
          sm:"row",
        }}>
          <Button onClick={()=>handler({_id , accept:true })}>
            Accept
          </Button>
          <Button color="error" onClick={()=>handler({_id , accept:false })}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
})
export default Notifications;
// 2:42:10