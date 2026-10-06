import { councilService } from '@/services/council';
import { CouncilDetailClient } from './CouncilDetailClient';

interface CouncilDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CouncilDetailPageProps) {
  const resolvedParams = await params;
  const member = await councilService.get(resolvedParams.id);
  return {
    title: member ? `${member.name} | A.T.L.A.S. Council` : 'Council Member | A.T.L.A.S.',
    description: member?.bio || 'Council member details',
  };
}

export default async function CouncilDetailPage({ params }: CouncilDetailPageProps) {
  const resolvedParams = await params;
  const member = await councilService.get(resolvedParams.id);

  if (!member) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Council Member Not Found</h1>
        <p>The requested council member could not be found.</p>
      </div>
    );
  }

  return <CouncilDetailClient initialMember={member} />;
}