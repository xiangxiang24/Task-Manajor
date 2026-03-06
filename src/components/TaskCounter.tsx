type TaskCounterProps = {
    total: number;
    remaining: number;
  };
  
  function TaskCounter({ total, remaining }: TaskCounterProps) {
    // TODO: Show different messages based on total and remaining
    // - "No tasks yet" when total === 0
    // - "All done! 🎉" when remaining === 0
    // - "X of Y tasks remaining" otherwise
    let message = "";
    if(total === 0) {
      message = "No tasks yet";
    } else if (remaining === 0) {
      message = "All done!"
    } else {
      message = `${total} tasks reamaining`;
    }
    
    return <h1 style={{
      backgroundColor: 'rgb(95 187 99 / 88%)',
      color: 'white',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '20px',
      textAlign: 'center'
    }}
    >{message}</h1>;
  }
  
  export default TaskCounter;