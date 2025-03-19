import React from "react";
import styles from "./TrafficLigth.module.css";
import { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("");

    return (
        <div className={styles.todo}>
            <div className={styles.trafficLightWrapper}>
                <div className={styles.palo}></div>
                <div className={styles.conteiner}>
                    <div className={styles.trafficLight}>
                        <div
                            className={`${styles.redLight} ${color == "red" ? styles.shine : ""
                                }`}
                            onClick={() => setColor("red")}
                        ></div>
                        <div
                            className={`${styles.yellowLight} ${color == "yellow" ? styles.shine : ""
                                } `}
                            onClick={() => {
                                setColor("yellow");
                            }}
                        ></div>
                        <div
                            className={`${styles.greenLight} ${color == "green" ? styles.shine : ""
                                } `}
                            onClick={() => {
                                setColor("green");
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrafficLight;
