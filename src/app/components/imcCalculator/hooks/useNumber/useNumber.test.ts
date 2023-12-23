import { renderHook } from "@testing-library/react";
import useNumber from "./useNumber";
import { act } from "react-dom/test-utils";


describe("Test of useNumber hook", () => {
    it("should display the default value", () => {
        const { result } = renderHook(() => useNumber(1));
        const { number, error } = result.current;

        expect(number).toEqual(1);
        expect(error).toBeFalsy();
    })

    it("should set the good number when setNumber is use", () => {
        const { result } = renderHook(() => useNumber(1));
        const { number, error } = result.current;

        expect(number).toEqual(1);
        expect(error).toBeFalsy();

        act(() => { result.current.setNumber(45)})

        expect(result.current.number).toEqual(45)
        expect(error).toBeFalsy();
    })

    it("should set ture to error if setError(true) is use", () => {
        const { result } = renderHook(() => useNumber(1));
        const { number, error } = result.current;

        expect(number).toEqual(1);
        expect(error).toBeFalsy();

        act(() => { result.current.setError(true)})

        expect(result.current.number).toEqual(1)
        expect(result.current.error).toBeTruthy();
    })

    
})