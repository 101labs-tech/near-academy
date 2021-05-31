import * as React from 'react'
import {FormSevenChapterWrapper} from './FormSevenChapter.style'
import {ChangeEvent, SyntheticEvent, useState} from "react";
import {
    FormInputs,
    getErrorMessage,
    getInputStatus,
    updateFormFromBlur,
    updateFormFromChange, updateFormFromSubmit
} from "../../../helpers/form";
import {SevenChapterForm} from "../../../shared/meme/SevenChapterForm";
import {Input} from "../Input/Input.controller";
import {Button} from "../Button/Button.controller";
export const FormSevenChapterView = () => {

    const [form, setForm] = useState<FormInputs>({
        meme: { value: '' },
        title: { value: '' },
        data: { value: '' },
        category: { value: '' },
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const updatedForm = updateFormFromChange(e, form, SevenChapterForm)
        setForm(updatedForm)
    }

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        const updatedForm = updateFormFromBlur(e, form)
        setForm(updatedForm)
    }

    const handleSubmit = (event: SyntheticEvent) => {
        const updatedForm = updateFormFromSubmit(event, form, SevenChapterForm)

        if (!updatedForm.meme.error && !updatedForm.title.error && !updatedForm.data.error && !updatedForm.category.error)
            console.log('success')
        else setForm(updatedForm)
    }

    return (
        <FormSevenChapterWrapper>
            <form onSubmit={handleSubmit}>
                <Input
                    name="meme"
                    placeholder="Enter Meme"
                    type="text"
                    onChange={handleChange}
                    value={form.meme.value}
                    onBlur={handleBlur}
                    inputStatus={getInputStatus(form.meme)}
                    errorMessage={getErrorMessage(form.meme)}
                />
                <Input
                    name="title"
                    placeholder="Enter Title"
                    type="text"
                    onChange={handleChange}
                    value={form.title.value}
                    onBlur={handleBlur}
                    inputStatus={getInputStatus(form.title)}
                    errorMessage={getErrorMessage(form.title)}
                />
                <Input
                    name="data"
                    placeholder="Enter Data"
                    type="text"
                    onChange={handleChange}
                    value={form.data.value}
                    onBlur={handleBlur}
                    inputStatus={getInputStatus(form.data)}
                    errorMessage={getErrorMessage(form.data)}
                />
                <Input
                    name="category"
                    placeholder="Enter Category"
                    type="number"
                    onChange={handleChange}
                    value={form.category.value}
                    onBlur={handleBlur}
                    inputStatus={getInputStatus(form.category)}
                    errorMessage={getErrorMessage(form.category)}
                />
                <Button type="submit" text="Submit" />
            </form>
        </FormSevenChapterWrapper>
    )
}
