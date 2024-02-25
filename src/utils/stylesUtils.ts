import { Dimensions } from 'react-native'

//

//屏幕的宽
export const screenWidth = Dimensions.get('window').width
//屏幕的高度
export const screenHeight = Dimensions.get('window').height


//将px 转换为dp

export const pxToDp = (elePx:number) => screenWidth * elePx/375