import '../UI/Card';

function Card(props) {
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>;

// console.log(props.className)
}

export default Card;