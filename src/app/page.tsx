"use client";

import {
    ActionIcon,
    useMantineColorScheme,
    useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

import classes from "./page.module.scss";

export default function Home() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme("light", {
        getInitialValueInEffect: true,
    });

    return (
        <main>
            {" "}
            <ActionIcon
                onClick={() =>
                    setColorScheme(
                        computedColorScheme === "light" ? "dark" : "light"
                    )
                }
                variant="default"
                size="xl"
                aria-label="Toggle color scheme"
            >
                <IconSun
                    className={`${classes.icon} ${classes.light}`}
                    stroke={1.5}
                />
                <IconMoon
                    className={`${classes.icon} ${classes.dark}`}
                    stroke={1.5}
                />
            </ActionIcon>
        </main>
    );
}
