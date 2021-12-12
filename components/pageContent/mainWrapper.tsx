import React from "react"
import { ChildrenType } from "utils/types/globalTypes"

function MainWrapper({ children }: ChildrenType): JSX.Element {
  return <main className="bg-green-200 dark:bg-green-900">{children}</main>
}

export default MainWrapper
