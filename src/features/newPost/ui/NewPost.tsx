"use client";

import React from "react";
import { Button } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import Link from "next/link";

import styles from "./styles.module.scss";
export function NewPost() {
    return (
        <>
            <Link href="/editor">
                <Button
                    className={styles.new__post}
                    leftSection={<IconPencil />}
                >
                    Написать пост
                </Button>
            </Link>
        </>
    );
}
