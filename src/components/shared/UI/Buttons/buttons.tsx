import { CSSProperties } from "react";
import styles from "./style.module.css"

const ButtonDefault = () => {
    return <button></button>
}

interface IButtonIcon {
    icon: React.ReactNode;
    styles?: CSSProperties;
}

const ButtonIcon = ({icon}: IButtonIcon) => {
    return <button className={styles.icon} style={styles}>
        {icon}
    </button>
}

export { ButtonDefault, ButtonIcon}