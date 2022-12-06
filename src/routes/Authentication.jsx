import { useContext } from "react";

import { UserContext } from "../context/User";
import { signInWithGoogle, SignOut } from "../utils/Authentication";

const Authentication = () => {
  const { currentUser } = useContext(UserContext);
  const signIn = async () => {
    await signInWithGoogle();
  };

  const signOut = async () => {
    await SignOut();
  };

  return (
    <div className="display">
      {currentUser == null ? (
        <button onClick={signIn}>Sign In</button>
      ) : (
        <div>
          <button onClick={signOut}>Sign out</button>
          <img src={currentUser.photoURL} referrerPolicy="no-referrer" alt="" />
        </div>
      )}
    </div>
  );
};

export default Authentication;
