import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
    FormButton,
    FormField,
    FormAlert,
    Drawer,
    ConfirmDialog,
    Pagination,
    PasswordInput,
    SectionDivider,
    EmptyState,
    StatusBadge,
    PageHeader,
    Spinner,
    SearchInput,
    Tabs,
} from '../components/common'

import './styles/ComponentsPreview.css'

const TABS = [
    { key: 'buttons', label: 'Buttons & Inputs' },
    { key: 'feedback', label: 'Feedback' },
    { key: 'layout', label: 'Layout' },
    { key: 'data', label: 'Data' },
]

export default function ComponentsPreview() {
    const navigate = useNavigate()

    // Tabs
    const [activeTab, setActiveTab] = useState('buttons')

    // FormField
    const [textVal, setTextVal] = useState('')
    const [emailVal, setEmailVal] = useState('')
    const [passVal, setPassVal] = useState('')

    // Search
    const [search, setSearch] = useState('')

    // Drawer
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [drawerSize, setDrawerSize] = useState('md')

    // ConfirmDialog
    const [confirmOpen, setConfirmOpen] = useState(false)

    // Pagination
    const [page, setPage] = useState(0)

    return (
        <div className="cp">

            <PageHeader
                title="Components Preview"
                subtitle="Temporary page — verify design then delete."
                action={
                    <FormButton variant="ghost" onClick={() => navigate('/dashboard')}>
                        ← Back to Dashboard
                    </FormButton>
                }
            />

            <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

            {/* ── BUTTONS & INPUTS ───────────────────────────────── */}
            {activeTab === 'buttons' && (
                <div className="cp__sections">

                    <section className="cp__section">
                        <SectionDivider label="FormButton — variants" />
                        <div className="cp__row">
                            <FormButton variant="primary">Primary</FormButton>
                            <FormButton variant="ghost">Ghost</FormButton>
                            <FormButton variant="outline">Outline</FormButton>
                            <FormButton variant="secondary">Secondary</FormButton>
                            <FormButton variant="danger">Danger</FormButton>
                        </div>
                        <div className="cp__row">
                            <FormButton variant="primary" loading loadingText="Saving…">Primary</FormButton>
                            <FormButton variant="primary" disabled>Disabled</FormButton>
                        </div>
                        <div className="cp__row cp__row--full">
                            <FormButton variant="primary" fullWidth>Full Width Primary</FormButton>
                        </div>
                    </section>

                    <section className="cp__section">
                        <SectionDivider label="FormField" />
                        <div className="cp__grid">
                            <FormField
                                label="Text field"
                                name="text"
                                value={textVal}
                                onChange={(e) => setTextVal(e.target.value)}
                                placeholder="Type something…"
                            />
                            <FormField
                                label="Required field"
                                name="email"
                                type="email"
                                value={emailVal}
                                onChange={(e) => setEmailVal(e.target.value)}
                                placeholder="you@example.com"
                                required
                            />
                            <FormField
                                label="Field with error"
                                name="error-demo"
                                value=""
                                onChange={() => { }}
                                placeholder="This field has an error"
                                error="This field is required."
                            />
                            <FormField
                                label="Disabled field"
                                name="disabled"
                                value="Cannot edit this"
                                onChange={() => { }}
                                disabled
                            />
                        </div>
                    </section>

                    <section className="cp__section">
                        <SectionDivider label="PasswordInput" />
                        <div className="cp__grid cp__grid--narrow">
                            <div className="cp__field-wrap">
                                <label className="cp__label">Password</label>
                                <PasswordInput
                                    placeholder="Enter your password"
                                    value={passVal}
                                    onChange={(e) => setPassVal(e.target.value)}
                                    className="cp__pwd-field"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="cp__section">
                        <SectionDivider label="SearchInput" />
                        <div className="cp__grid cp__grid--narrow">
                            <SearchInput
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onClear={() => setSearch('')}
                                placeholder="Search targets…"
                            />
                        </div>
                    </section>

                </div>
            )}

            {/* ── FEEDBACK ───────────────────────────────────────── */}
            {activeTab === 'feedback' && (
                <div className="cp__sections">

                    <section className="cp__section">
                        <SectionDivider label="FormAlert" />
                        <div className="cp__stack">
                            <FormAlert type="error" message="Something went wrong. Please try again." />
                            <FormAlert type="success" message="Your changes have been saved successfully." />
                        </div>
                    </section>

                    <section className="cp__section">
                        <SectionDivider label="StatusBadge" />
                        <div className="cp__row cp__row--wrap">
                            <StatusBadge status="DONE" />
                            <StatusBadge status="ACTIVE" />
                            <StatusBadge status="COMPLETED" />
                            <StatusBadge status="SCHEDULED" />
                            <StatusBadge status="PENDING" />
                            <StatusBadge status="RUNNING" />
                            <StatusBadge status="FAILED" />
                            <StatusBadge status="MISSED" />
                            <StatusBadge status="CRITICAL" />
                            <StatusBadge status="HIGH" />
                            <StatusBadge status="MEDIUM" />
                            <StatusBadge status="LOW" />
                            <StatusBadge status="DRAFT" />
                            <StatusBadge status="BASIC" />
                            <StatusBadge status="GROWTH" />
                            <StatusBadge status="ENTERPRISE" />
                        </div>
                    </section>

                    <section className="cp__section">
                        <SectionDivider label="Spinner" />
                        <div className="cp__row">
                            <div className="cp__spinner-cell">
                                <Spinner size="sm" />
                                <span className="cp__spinner-label">sm</span>
                            </div>
                            <div className="cp__spinner-cell">
                                <Spinner size="md" />
                                <span className="cp__spinner-label">md</span>
                            </div>
                            <div className="cp__spinner-cell">
                                <Spinner size="lg" />
                                <span className="cp__spinner-label">lg</span>
                            </div>
                            <div className="cp__spinner-cell cp__spinner-cell--dark">
                                <Spinner size="md" color="white" />
                                <span className="cp__spinner-label cp__spinner-label--light">white</span>
                            </div>
                            <div className="cp__spinner-cell">
                                <Spinner size="md" color="navy" />
                                <span className="cp__spinner-label">navy</span>
                            </div>
                        </div>
                    </section>

                    <section className="cp__section">
                        <SectionDivider label="ConfirmDialog" />
                        <div className="cp__row">
                            <FormButton variant="primary" onClick={() => setConfirmOpen(true)}>
                                Open Confirm Dialog
                            </FormButton>
                        </div>
                        <ConfirmDialog
                            isOpen={confirmOpen}
                            title="Delete target"
                            message="Are you sure you want to delete this target? This action cannot be undone."
                            confirmLabel="Delete"
                            isDanger
                            onConfirm={() => setConfirmOpen(false)}
                            onCancel={() => setConfirmOpen(false)}
                        />
                    </section>

                </div>
            )}

            {/* ── LAYOUT ─────────────────────────────────────────── */}
            {activeTab === 'layout' && (
                <div className="cp__sections">

                    <section className="cp__section">
                        <SectionDivider label="PageHeader — variants" />
                        <div className="cp__stack">
                            <div className="cp__preview-box">
                                <PageHeader
                                    title="Targets"
                                    subtitle="Manage the domains and IPs you want to scan."
                                    action={<FormButton variant="primary">+ Add Target</FormButton>}
                                />
                            </div>
                            <div className="cp__preview-box">
                                <PageHeader title="Scan Results" />
                            </div>
                        </div>
                    </section>

                    <section className="cp__section">
                        <SectionDivider label="SectionDivider" />
                        <div className="cp__stack">
                            <SectionDivider label="With label" />
                            <SectionDivider />
                        </div>
                    </section>

                    <section className="cp__section">
                        <SectionDivider label="Drawer — sizes" />
                        <div className="cp__row">
                            {['sm', 'md', 'lg'].map((size) => (
                                <FormButton
                                    key={size}
                                    variant="ghost"
                                    onClick={() => { setDrawerSize(size); setDrawerOpen(true) }}
                                >
                                    Open {size.toUpperCase()}
                                </FormButton>
                            ))}
                        </div>
                        <Drawer
                            open={drawerOpen}
                            title={`Drawer — ${drawerSize.toUpperCase()}`}
                            onClose={() => setDrawerOpen(false)}
                            size={drawerSize}
                            error={drawerSize === 'sm' ? 'This is what a drawer error banner looks like.' : ''}
                            footer={
                                <>
                                    <FormButton variant="ghost" onClick={() => setDrawerOpen(false)} fullWidth>Cancel</FormButton>
                                    <FormButton variant="primary" onClick={() => setDrawerOpen(false)} fullWidth>Save Changes</FormButton>
                                </>
                            }
                        >
                            <FormField
                                label="Full Name"
                                name="drawer-name"
                                value=""
                                onChange={() => { }}
                                placeholder="John Doe"
                                required
                            />
                            <FormField
                                label="Email"
                                name="drawer-email"
                                type="email"
                                value=""
                                onChange={() => { }}
                                placeholder="john@example.com"
                            />
                            <SectionDivider label="Additional info" />
                            <FormField
                                label="Phone"
                                name="drawer-phone"
                                type="tel"
                                value=""
                                onChange={() => { }}
                                placeholder="+966 5X XXX XXXX"
                            />
                        </Drawer>
                    </section>

                    <section className="cp__section">
                        <SectionDivider label="EmptyState — variants" />
                        <div className="cp__row cp__row--stretch">
                            <div className="cp__preview-box cp__preview-box--half">
                                <EmptyState
                                    title="No targets yet"
                                    subtitle="Add your first target to start scanning your infrastructure."
                                    action={<FormButton variant="primary">+ Add Target</FormButton>}
                                />
                            </div>
                            <div className="cp__preview-box cp__preview-box--half">
                                <EmptyState
                                    title="No results found"
                                    subtitle="Try adjusting your search or filters."
                                />
                            </div>
                        </div>
                    </section>

                </div>
            )}

            {/* ── DATA ───────────────────────────────────────────── */}
            {activeTab === 'data' && (
                <div className="cp__sections">

                    <section className="cp__section">
                        <SectionDivider label="Tabs" />
                        <div className="cp__preview-box">
                            <Tabs
                                tabs={[
                                    { key: 'overview', label: 'Overview' },
                                    { key: 'findings', label: 'Findings', count: 12 },
                                    { key: 'load', label: 'Load Test', count: 3 },
                                    { key: 'report', label: 'Report' },
                                ]}
                                activeTab="findings"
                                onChange={() => { }}
                            />
                            <p className="cp__hint">Tab content renders here based on activeTab.</p>
                        </div>
                    </section>

                    <section className="cp__section">
                        <SectionDivider label="Pagination" />
                        <div className="cp__preview-box">
                            <Pagination
                                page={page}
                                totalPages={8}
                                totalElements={76}
                                itemLabel="scans"
                                onPageChange={setPage}
                            />
                        </div>
                    </section>

                </div>
            )}

        </div>
    )
}