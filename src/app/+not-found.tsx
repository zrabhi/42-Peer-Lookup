import { OfflineIllustration } from '@/components/icons/OfflineIllustration';
import { AlertMessage } from '@/components/ui/AlertMessage';

// TODO: ADD got home screen button !!!!

export default function NotFoundScreen() {
  return (
    <AlertMessage
      className="px-4"
      alertIcon={OfflineIllustration}
      message="Opss.. this screen doesn t exist"
    />
  );
}
