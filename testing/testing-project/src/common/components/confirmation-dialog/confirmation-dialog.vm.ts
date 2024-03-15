
interface LabelProps {
    closeButton: string;
    acceptButton: string;
}

export interface ConfirmationDialogProps {
    isOpen: boolean;
    onAccept: () => void;
    onClose: () => void;
    title: string | React.ReactNode;
    labels: LabelProps;
    children: React.ReactNode;
  }
  