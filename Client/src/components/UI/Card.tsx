const Card: React.FC = (props) => {
  return (
    <div className="w-full shadow-xl bg-white rounded-lg">{props.children}</div>
  );
};
export default Card;
