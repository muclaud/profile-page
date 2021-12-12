import React from "react"

type CardWithIconProps = {
  bgColor: string
  bgIconColor: string
  iconName: string
  cardTitle: string
  textColor: string
  text: string
}

const CardWithIcon = ({
  bgColor,
  bgIconColor,
  iconName,
  cardTitle,
  textColor,
  text,
}: CardWithIconProps): JSX.Element => {
  return (
    <div
      className={`relative flex flex-col min-w-0 break-words ${bgColor} w-full mb-8 shadow-lg rounded-lg`}
    >
      <div className="px-4 py-5 flex-auto">
        <div
          className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${bgIconColor}`}
        >
          <i className={`fas ${iconName}`}></i>
        </div>
        <h6 className="text-xl font-semibold">{cardTitle}</h6>
        <p className={`mt-2 mb-4 ${textColor}`}>{text}</p>
      </div>
    </div>
  )
}

export default CardWithIcon
