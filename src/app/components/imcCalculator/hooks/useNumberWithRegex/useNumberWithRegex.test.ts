import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useNumberWithRegex from "./useNumberWithRegex";



describe('Test of the useNumberWithRegex hook', () => {
    it("should display the default states", () => {
        const { result } = renderHook(()=> useNumberWithRegex(1, /\d{1,3}/))
        const { number, error } = result.current;

        expect(number).toEqual(1);
        expect(error).toBeFalsy();
    })

    it("should set the number when it is in a good format", () => {
        const { result } = renderHook(()=> useNumberWithRegex(1, /\d{1,3}/))
        const { number, error } = result.current;

        expect(number).toEqual(1);
        expect(error).toBeFalsy();

        act(()=> result.current.setNumberFormatted(50))

        expect(result.current.number).toEqual(50);
        expect(result.current.error).toBeFalsy();

        act(()=> result.current.setNumberFormatted(1))

        expect(result.current.number).toEqual(1);
        expect(result.current.error).toBeFalsy();

        act(()=> result.current.setNumberFormatted(300))

        expect(result.current.number).toEqual(300);
        expect(result.current.error).toBeFalsy();
    })

    it("should set error when unmber is not in a good format", () => {
        const { result } = renderHook(()=> useNumberWithRegex(1, /\d{1,3}/))
        const { number, error } = result.current;

        expect(number).toEqual(1);
        expect(error).toBeFalsy();

        act(()=> result.current.setNumberFormatted(301))

        expect(result.current.number).toEqual(1);
        expect(result.current.error).toBeTruthy();

        act(()=> result.current.setNumberFormatted(0))

        expect(result.current.number).toEqual(1);
        expect(result.current.error).toBeTruthy();

        act(()=> result.current.setNumberFormatted(-39))

        expect(result.current.number).toEqual(1);
        expect(result.current.error).toBeTruthy();
    })
})