import { signInWithGoogle, addAuthToDB } from "../utils/Authentication";

const Authentication = () => {
  const signIn = async () => {
    const { user } = await signInWithGoogle();
    addAuthToDB(user);
  };
  return (
    <div className="display">
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default Authentication;
