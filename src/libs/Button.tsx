import {FC} from "react";

const TestButton:FC<{name:string}> = ({name}) => {
  return <div>{name}</div>
}

export default TestButton
