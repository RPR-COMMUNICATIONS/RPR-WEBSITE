import { SystemBox, C4Icon } from './c4-elements';
import type { NodeData } from '../App';
import { useTranslation } from 'react-i18next';

interface L4SovereigntyProps {
  onNodeClick: (node: NodeData) => void;
}

export function L4Sovereignty({ onNodeClick }: L4SovereigntyProps) {
  const { t } = useTranslation();

  const sovereignRootNode: NodeData = {
    id: 'sovereign-root',
    name: t('mothership.nodes.sovereign_root.name'),
    type: t('mothership.nodes.sovereign_root.type'),
    description: t('mothership.nodes.sovereign_root.description'),
    auditTrail: [
      {
        timestamp: '2026-02-05 07:00:00',
        user: 'System Archivist',
        action: 'Daily Backup',
        details: 'Sovereign_Root backed up. Size: 4.7GB. Integrity verified.',
      },
      {
        timestamp: '2026-02-04 18:30:00',
        user: 'The Overwatch',
        action: 'Protocol Update',
        details: 'Updated governance framework v3.2. All instances notified.',
      },
      {
        timestamp: '2026-02-03 12:00:00',
        user: 'Legal Department',
        action: 'Compliance Audit',
        details: 'Annual regulatory compliance review completed. Status: Compliant.',
      },
    ],
  };

  const commsRootNode: NodeData = {
    id: 'comms-root',
    name: t('mothership.nodes.comms_root.name'),
    type: t('mothership.nodes.comms_root.type'),
    description: t('mothership.nodes.comms_root.description'),
    auditTrail: [
      {
        timestamp: '2026-02-05 09:30:00',
        user: 'System Archivist',
        action: 'Daily Backup',
        details: 'Comms_Root backed up. Size: 2.1GB. Integrity verified.',
      },
      {
        timestamp: '2026-02-04 15:45:00',
        user: 'Communications Team',
        action: 'Template Update',
        details: 'Added 7 new client communication templates. Multi-language support enabled.',
      },
    ],
  };

  const uddNode: NodeData = {
    id: 'udd-instance',
    name: t('mothership.nodes.udd.name'),
    type: t('mothership.nodes.udd.type'),
    description: t('mothership.nodes.udd.description'),
    auditTrail: [
      {
        timestamp: '2026-02-05 13:00:00',
        user: 'UDD Instance',
        action: 'Design Review',
        details: 'Completed UX audit for 3 client applications. 47 recommendations issued.',
      },
      {
        timestamp: '2026-02-04 10:20:00',
        user: 'UDD Instance',
        action: 'User Research',
        details: 'Conducted user interviews with 23 participants. Insights synthesized.',
      },
    ],
  };

  const ifsNode: NodeData = {
    id: 'ifs-instance',
    name: t('mothership.nodes.ifs.name'),
    type: t('mothership.nodes.ifs.type'),
    description: t('mothership.nodes.ifs.description'),
    auditTrail: [
      {
        timestamp: '2026-02-05 11:00:00',
        user: 'IFS Instance',
        action: 'Financial Modeling',
        details: 'Generated Q1 2026 revenue projections. Model accuracy: 94.3%.',
      },
      {
        timestamp: '2026-02-04 14:00:00',
        user: 'IFS Instance',
        action: 'Budget Analysis',
        details: 'Analyzed departmental spending. Identified $34K optimization opportunity.',
      },
    ],
  };

  const pbasNode: NodeData = {
    id: 'pbas-instance',
    name: t('mothership.nodes.pbas.name'),
    type: t('mothership.nodes.pbas.type'),
    description: t('mothership.nodes.pbas.description'),
    auditTrail: [
      {
        timestamp: '2026-02-05 08:00:00',
        user: 'PBAS Instance',
        action: 'Performance Report',
        details: 'Generated weekly KPI dashboard. All metrics within target ranges.',
      },
      {
        timestamp: '2026-02-04 16:30:00',
        user: 'PBAS Instance',
        action: 'Analytics Update',
        details: 'Deployed new analytics model. Predictive accuracy improved by 12%.',
      },
    ],
  };

  const wardenNode: NodeData = {
    id: 'the-warden',
    name: t('mothership.nodes.warden.name'),
    type: t('mothership.nodes.warden.type'),
    description: t('mothership.nodes.warden.description'),
    auditTrail: [
      {
        timestamp: '2026-02-05 06:00:00',
        user: 'The Warden',
        action: 'Regional Verification',
        details: 'All instances verified within Singapore jurisdiction. Access controls active.',
      },
      {
        timestamp: '2026-02-04 12:00:00',
        user: 'The Warden',
        action: 'Compliance Check',
        details: 'Singapore PDPA compliance verified. Data residency requirements met.',
      },
    ],
  };

  return (
    <div className="h-full overflow-auto p-12 bg-[var(--sovereign-bg-primary)]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-1 text-foreground">
            {t('mothership.l4.title')}
          </h2>
          <p className="text-sm text-gray-400">{t('mothership.l4.subtitle')}</p>
        </div>

        {/* Canonical Archives */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gray-700" />
            <span className="text-xs text-gray-400 font-mono px-3 uppercase">{t('mothership.axis_archives')}</span>
            <div className="h-px flex-1 bg-gray-700" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <SystemBox
              title={sovereignRootNode.name}
              description={sovereignRootNode.description}
              color="orange"
              onClick={() => onNodeClick(sovereignRootNode)}
            />

            <SystemBox
              title={commsRootNode.name}
              description={commsRootNode.description}
              color="orange"
              onClick={() => onNodeClick(commsRootNode)}
            />
          </div>

          <div className="flex justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#2f2019] border border-orange-600/30 rounded text-xs text-orange-400 uppercase">
              <C4Icon iconName="lock" className="text-sm" />
              <span className="font-mono">{t('mothership.notice_encrypted')}</span>
            </div>
          </div>
        </div>

        {/* The Warden */}
        <div className="mb-16">
          <div className="max-w-xl mx-auto">
            <SystemBox
              title={wardenNode.name}
              description={wardenNode.description}
              color="red"
              onClick={() => onNodeClick(wardenNode)}
            />
            <div className="flex justify-center mt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#2f1919] border border-red-600/30 rounded text-xs text-red-400 uppercase">
                <C4Icon iconName="location_on" className="text-sm" />
                <span className="font-mono">{t('mothership.notice_jurisdiction')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specialist Instances */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gray-700" />
            <span className="text-xs text-gray-400 font-mono px-3 uppercase">{t('mothership.axis_instances')}</span>
            <div className="h-px flex-1 bg-gray-700" />
          </div>

          <div className="text-center mb-6">
            <span className="text-xs text-gray-500 uppercase">{t('mothership.notice_graduated')}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SystemBox
              title={uddNode.name}
              description={uddNode.description}
              color="cyan"
              onClick={() => onNodeClick(uddNode)}
            />

            <SystemBox
              title={ifsNode.name}
              description={ifsNode.description}
              color="cyan"
              onClick={() => onNodeClick(ifsNode)}
            />

            <SystemBox
              title={pbasNode.name}
              description={pbasNode.description}
              color="cyan"
              onClick={() => onNodeClick(pbasNode)}
            />
          </div>
        </div>

        {/* Data Law Notice */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="p-4 bg-[var(--sovereign-bg-secondary)] border border-[var(--sovereign-border)] rounded-lg">
            <div className="text-xs text-gray-400 mb-1 uppercase">Data Law Compliance</div>
            <div className="text-sm text-gray-300">
              {t('mothership.notice_data_law')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
