'use client'

import React, { OptionHTMLAttributes, LabelHTMLAttributes } from "react";

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {}

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}


const SelectLabel: React.FC<LabelProps> = ({ children, className }) => (
  <label className={className}>{children}</label>
);

const SelectOption: React.FC<OptionProps> = ({ children, className }) => (
  <option className={className}>{children}</option>
);

export { SelectLabel, SelectOption };
