"use client";
import { Box, Button, Divider } from "@mantine/core";
import styles from "./styles.module.scss";
import { IconPencil } from "@tabler/icons-react";
import Link from "next/link";
export function NewPost() {
    const [open, setOpen] = React.useState<boolean>(false);
    return (
        <>
            <Link href="/editor">
                <Button
                    onClick={() => setOpen(!open)}
                    className={styles.new__post}
                    leftSection={<IconPencil />}
                >
                    Написать пост
                </Button>
            </Link>
        </>
    );
}
// Импортировать компонент в Header
import React, { useState } from "react";

const PopupButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={togglePopup}>Открыть попап</button>
            {isOpen && <div>Содержимое попапа</div>}
        </div>
    );
};

export default PopupButton;
