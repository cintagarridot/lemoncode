import * as React from 'react';
import { Route } from 'react-router-dom';
import { renderWithRouter } from '../../../common/test';
import { Lookup } from '../../../common/models';
import { ConfirmationDialogProps } from './confirmation-dialog.vm';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { renderHook } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('common/Confirmation-dialog Component', () => {
  it('should be render as expected passing required properties', () => {
    // Arrange
    const props = {
            isOpen: true,
            onAccept: () => {},
            onClose: () => {},
            title: 'Dialog Test',
            labels: {
                closeButton: 'Cancelar',
                acceptButton: 'Aceptar',
            },
            children: <>Hola</>
        } as ConfirmationDialogProps;
    

    // Act
    const { getByText, getByTestId } = renderWithRouter(
      <ConfirmationDialogComponent {...props} />,
      <>
        <Route
          path={'/projects'}
          element={<h1>Test route destination</h1>}
        />
      </>
    );

    // Assert
    expect(getByText('Dialog Test')).toBeInTheDocument();
    expect(getByText('Hola')).toBeInTheDocument();
    expect(getByTestId('close-button')).toBeInTheDocument();
    expect(getByTestId('accept-button')).toBeInTheDocument();
  });

  it('should not be render as expected if isOpen is false', () => {
    // Arrange
    const props = {
            isOpen: false,
            onAccept: () => {},
            onClose: () => {},
            title: 'Dialog Test',
            labels: {
                closeButton: 'Cancelar',
                acceptButton: 'Aceptar',
            },
            children: <>Hola</>
        } as ConfirmationDialogProps;
    

    // Act
    const { queryByText, queryByTestId } = renderWithRouter(
      <ConfirmationDialogComponent {...props} />,
      <>
        <Route
          path={'/projects'}
          element={<h1>Test route destination</h1>}
        />
      </>
    );

    // Assert
    const text = queryByText('Dialog Test');
    expect(text).toBeNull();
    expect(queryByText('Hola')).not.toBeInTheDocument();
    expect(queryByTestId('close-button')).not.toBeInTheDocument();
    expect(queryByTestId('accept-button')).not.toBeInTheDocument();
  });
});

describe('common useConfirmationDialog Hook', () => {

    it('should return required properties with initial values', () => {
        const { result } = renderHook(() => useConfirmationDialog());
        const { 
            isOpen,
            itemToDelete,
        } = result.current;

        const expectedItemToDelete = {
            id: '',
            name: '',
        };

        expect(isOpen).toBeFalsy();
        expect(itemToDelete).toEqual(expectedItemToDelete);
    });

});
