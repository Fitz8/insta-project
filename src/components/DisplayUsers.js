const DisplayUsers = ({ username, email}) => {

  return (
    <div id="users">
    <p>User: {username}</p>
    <p>Email: {email}</p>
    </div>
  );
};

export default DisplayUsers;