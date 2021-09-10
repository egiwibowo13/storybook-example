import React from "react";
import { Text } from 'react-native';
import { Meta, Story } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import { CusBtn } from './CusBtn';

const A = ({ text }) => {
    return (
        <Text>{text}</Text>
    )
}

export default {
    component: CusBtn,
    title: 'Material/Button',
};

const Template = (args) => {
    return (
        <CusBtn {...args} onPress={action('coba')} />
    );
};

export const SomeName = Template.bind({});
SomeName.args = {
    title: "hai",
    variant: "contained",
    color: "primary",
};

export const SomeNameA = A.bind({});
SomeNameA.args = {
    text: "hai",
    variant: "contained",
    color: "primary",
};