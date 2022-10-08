function Avatar(props) {
  return (
    <img className="avatar" src={props.user.avartarUrl} alt={props.user.name} />
  );
}
