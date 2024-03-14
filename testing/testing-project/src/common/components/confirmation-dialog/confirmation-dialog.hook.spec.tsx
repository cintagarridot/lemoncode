import { act, renderHook } from "@testing-library/react";
import { useConfirmationDialog } from "./confirmation-dialog.hook";

describe('common useConfirmationDialog Hook', () => {

    it('should return required properties with initial values', () => {
        const { result } = renderHook(() => useConfirmationDialog());
        const { 
            isOpen,
            itemToDelete,
            onAccept,
            onClose,
            onOpenDialog,
        } = result.current;

        const expectedItemToDelete = {
            id: '',
            name: '',
        };

        expect(isOpen).toBeFalsy();
        expect(itemToDelete).toEqual(expectedItemToDelete);
        expect(onAccept).toEqual(expect.any(Function));
        expect(onClose).toEqual(expect.any(Function));
        expect(onOpenDialog).toEqual(expect.any(Function));
    });

    it('should change itemToDelete value and isOpen to true when enter in onOpenDialog function', () => {
        const item = {
            id: '1',
            name: 'example',
        };

        const { result } = renderHook(() => useConfirmationDialog());      

        act(() => {
            result.current.onOpenDialog(item);
        });
       
        expect(result.current.itemToDelete).toEqual(item);
        expect(result.current.isOpen).toBeTruthy();
    });

    it('should change isOpen value to false when enter in onClose function', () => {
        const item = {
            id: '1',
            name: 'example',
        };

        const { result } = renderHook(() => useConfirmationDialog());      

        act(() => {
            result.current.onOpenDialog(item);
        });
       
        expect(result.current.isOpen).toBeTruthy();

        act(() => {
            result.current.onClose();
        });

        expect(result.current.isOpen).toBeFalsy();
    });

    it('should change itemToDelete value to empty value after enter in onAccept function', () => {
        const item = {
            id: '1',
            name: 'example',
        };

        const emtpyItem = {
            id: '',
            name: '',
        };

        const { result } = renderHook(() => useConfirmationDialog());      

        act(() => {
            result.current.onOpenDialog(item);
        });
       
        expect(result.current.itemToDelete).toEqual(item);

        act(() => {
            result.current.onAccept();
        });

        expect(result.current.itemToDelete).toEqual(emtpyItem);
    });

});