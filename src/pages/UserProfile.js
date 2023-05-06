import Welcome from "../components/Welcome";

const UserProfile = () => {
  const username = sessionStorage.getItem("username");

  return (
    <>
      <Welcome text={`Welcome ${username} to your profile page`} />
    </>
  );
};

export default UserProfile;
