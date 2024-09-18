import { useState } from "react";
const useTheme = () => {
    const [isToggled, setIsToggled] = useState<boolean>(false)
    const handleSwitchTheme = () => {
        setIsToggled(prev => !prev)
    }
    return { isToggled, handleSwitchTheme }
}

export default useTheme;