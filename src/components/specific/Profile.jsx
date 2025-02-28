import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";
const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contained",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard text={"This is my profile"} heading={"Bio"} />
      <ProfileCard text={"Username"} heading={"thePrabhatRawat"} Icon={<UserNameIcon/>} />
      <ProfileCard text={"Name"} heading={"The Prabhat Rawat"} Icon = {<FaceIcon/>} />
      <ProfileCard text={moment('2023-11-04T18:30:00.000Z').fromNow()} heading={"Joined"} Icon = {<CalendarIcon/>} />
    </Stack>
  );
};
const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}

    <Stack>
      <Typography varient={"body1"}>{text}</Typography>
      <Typography color={"grey"} varient={"caption"}>
        {heading}
      </Typography>
    </Stack>
  </Stack>
);
export default Profile;
