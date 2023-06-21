import React, { Component } from "react";
import styles from "./DFButton.module.css";
import { ConfigProvider, Button } from "antd";

export default class DFButton extends Component<DFButtonProps> {
    render(): React.ReactNode {
        return (
            <div className={styles.con}>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: "#00b96b",
                        },
                    }}
                >
                    <Button className={styles.con} onClick={this.props.onClick}
                    type={this.props.type}>
                        {this.props.title}
                    </Button>

                </ConfigProvider>
            </div>
        );
    }
}

interface DFButtonProps {
    title: string;
    onClick:
        | (React.MouseEventHandler<HTMLAnchorElement> &
              React.MouseEventHandler<HTMLButtonElement>)
        | undefined;
    type: "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined,
}
