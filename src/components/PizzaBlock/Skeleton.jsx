import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="139" cy="120" r="120" /> 
    <rect x="0" y="260" rx="10" ry="10" width="280" height="20" /> 
    <rect x="0" y="300" rx="10" ry="10" width="280" height="80" /> 
    <rect x="130" y="400" rx="26" ry="26" width="150" height="44" /> 
    <rect x="0" y="406" rx="10" ry="10" width="95" height="30" />
  </ContentLoader>
)

export default Skeleton
