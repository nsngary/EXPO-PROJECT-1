import { Feather, FontAwesome } from "@expo/vector-icons";

export const icon = {
    index: (props:any) => <Feather name='home' size={24} {...props} />,
    performance: (props:any) => <Feather name='bar-chart-2' size={24} {...props} />,
    order: (props:any) => <FontAwesome name='shopping-bag' size={24} {...props} />,
    event: (props:any) => <Feather name='calendar' size={24} {...props} />,
    profile: (props:any) => <Feather name='user' size={24} {...props} />,
}