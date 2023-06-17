import { ThemeIcon, RingProgress, Text, Center } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export default function Progress() {
    return (
        <>
            <RingProgress
                sections={[{ value: 40, color: "blue" }]}
                label={
                    <Text color="blue" weight={700} align="center" size="xl">
                        40%
                    </Text>
                }
            />

            <RingProgress
                sections={[{ value: 100, color: "teal" }]}
                label={
                    <Center>
                        <ThemeIcon
                            color="teal"
                            variant="light"
                            radius="xl"
                            size="xl"
                        >
                            <IconCheck size={22} />
                        </ThemeIcon>
                    </Center>
                }
            />
        </>
    );
}
