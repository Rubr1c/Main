function ProfilePicture() {
  const imageUrl = "./src/assets/finn.jpg";

  const handleClick = (e) => {
    e.target.style.display = "none";
  }

  return <img src={imageUrl} onClick={(e) => handleClick(e)} alt="Profile" />;
}

export default ProfilePicture;
