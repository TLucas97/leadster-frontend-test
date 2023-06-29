export interface ModalProps {
  description: string;
  title: string;
  video_url: string;
  isOpen: boolean;
  onClose: () => void;
}
