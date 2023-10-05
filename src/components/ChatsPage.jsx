import { PrettyChatWindow } from "react-chat-engine-pretty";
import PropTypes from "prop-types";

const ChatsPage = ({ user }) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="bea7cb51-3926-40fa-87d8-fc1a8330b5f4"
        username={user.username}
        secret={user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};
ChatsPage.propTypes = {
  user: PropTypes.object,
};
export default ChatsPage;
