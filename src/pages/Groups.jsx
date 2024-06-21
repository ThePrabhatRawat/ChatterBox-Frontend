import {
  Delete as DeleteIcon,
  Add as AddIcon,
  Done as DoneIcon,
  Edit as EditICon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  Tooltip,
  Drawer,
  Stack,
  Typography,
  TextField,
  Button,
  Backdrop,
} from "@mui/material";
import React, { lazy, memo, Suspense, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { bgGradient, matBlack } from "../../constants/Color";
import { Link } from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { sameplchats, sampleUsers } from "../../constants/SampleData";
import UserItem from "../components/shared/UserItem.jsx";
const ConfirmDeleteDialog = lazy(()=>import("../components/dialog/ConfirmDeleteDialog.jsx"))
const AddMemberDialog = lazy(()=>import("../components/dialog/AddMemberDialog.jsx"))
function Groups() {
  const chatId = useSearchParams()[0].get("group");
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [confirmDeleteDialogue , setConfirmDeleteDialogue]  = useState(false);
  const isAddMember = false;
  const navigateBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  };
  const updateGroupHandler = () => {
    setIsEdit(false);
  };
  const openConfirmDeleteHandler = ()=>{
    setConfirmDeleteDialogue(true);
    console.log("somethign");
  }
  const closeConfirmDeleteHandler = ()=>{
    setConfirmDeleteDialogue(false);
    console.log("somethign");
  }
  const openAddMemberHandler = ()=>{
    console.log("this is add member handler");
  }
  const deleteHandler = ()=>{
    console.log("this is delete Handler")
  }
  const removeMemberHandler = (id)=>{
    console.log("remove memeber" , id);
  }
  useEffect(() => {
    if(chatId){
      setGroupName(`Group Name  ${chatId}`);
    setGroupNameUpdatedValue(`Group Name  ${chatId}`);
    }
    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);
  const GroupName = (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={"1rem"}
      padding={"3rem"}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />
          <IconButton onClick={updateGroupHandler}>
            <DoneIcon></DoneIcon>
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4" color="initial">
            {groupName}
          </Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditICon></EditICon>
          </IconButton>
        </>
      )}
    </Stack>
  );

  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon></MenuIcon>
        </IconButton>
      </Box>

      <Tooltip title="Back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matBlack,
            color: "white",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
        </IconButton>
      </Tooltip>
    </>
  );
  const ButtonGroup = (
    <>
    <Stack
      direction={{
        xs: "column-reverse",
        sm: "row",
      }}
      spacing={"1rem"}
      p={{
        xs: "0",
        sm: "1rem",
        md: "1rem 4rem",
      }}
    >
      <Button size = "large" color="error" variant="outlined" startIcon={<DeleteIcon></DeleteIcon>} onClick={openConfirmDeleteHandler} >Delete Group</Button>
      <Button size = "large" variant="contained" startIcon={<AddIcon/>} onClick={openAddMemberHandler}  >Add Member</Button>
    </Stack>
    </>
  );

  return (
    <div>
      <Grid container height={"100vh"}>
        <Grid
          item
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
            
          }}
          sm={4}
        >
          <GroupList myGroups={sameplchats} chatId={chatId} />
        </Grid>
        <Grid
          item
          sm={8}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            padding: "1rem 3rem",
          }}
        >
          {IconBtns}

          {groupName && (
            <>
              {GroupName}
              <Typography
                margin={"2rem"}
                alignSelf={"flex-start"}
                variant="body1"
              >
                Members
              </Typography>
              <Stack
                maxwidth={"45rem"}
                width={"100%"}
                boxSizing={"border-box"}
                padding={{
                  sm: "1rem",
                  xs: "0",
                  md: "1rem 4rem",
                }}
                spacing={"2rem"}
                // bgcolor={"bisque"}
                height={"50vh"}
                overflow={"auto"}
              >
                {/* memebers */}
                {
                  sampleUsers.map((i)=>(
                    <UserItem key={i._id} user={i} isAdded styling = {
                      {
                        boxShadow : "0 0 0.5rem rgba(0,0,0,0.2)",
                        padding : "1rem 2rem",
                        borderRadius : "1rem",
                      }
                    }
                    handler={removeMemberHandler} ></UserItem>
                  ))
                }
              </Stack>
              
              {ButtonGroup}
            </>
          )}
          {
            isAddMember && <Suspense fallback={<Backdrop open/>}>
                <AddMemberDialog/>
            </Suspense>
          }
        </Grid>
        {
          confirmDeleteDialogue && <Suspense fallback={<Backdrop open/>}>
            <ConfirmDeleteDialog open={confirmDeleteDialogue} handleClose={closeConfirmDeleteHandler} deleteHandler={deleteHandler}></ConfirmDeleteDialog>
          </Suspense>
        }
        <Drawer
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
          open={isMobileMenuOpen}
          onClose={handleMobileClose}
        >
          <GroupList width={"50vw"} myGroups={sameplchats} chatId={chatId} />
        </Drawer>
      </Grid>
    </div>
  );
}
const GroupList = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <Stack sx={{
      backgroundImage : bgGradient,
      height:"100vh",
      overflow: "auto"
    }} width={w}>
      {myGroups.length > 0 ? (
        myGroups.map((group) => (
          <GroupListItem
            key={group._id}
            group={group}
            chatId={chatId}
          ></GroupListItem>
        ))
      ) : (
        <Typography padding="1rem" textAlign={"center"}>
          No Groups
        </Typography>
      )}
    </Stack>
  );
};
const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;

// 4:4:35
