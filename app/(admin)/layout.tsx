import {ReactNode} from 'react'

type Props = {
  children: ReactNode;
}

function layout({children}: Props) {
  return (
    <div>
      {children}
    </div>
  )
}

export default layout