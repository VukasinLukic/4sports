import type { Metadata } from 'next';
import SupportContent from './SupportContent';

export const metadata: Metadata = {
  title: 'Support',
};

export default function SupportPage() {
  return <SupportContent />;
}
