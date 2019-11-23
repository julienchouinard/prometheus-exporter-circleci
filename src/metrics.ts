import {Gauge, Histogram} from 'prom-client';

// tslint:disable-next-line:interface-over-type-literal
export type Labels = {
    owner: string;
    repo: string;
    success: string;
    branch: string;
    workflow_job: string;
    workflow: string;
    upstream_jobs: string;
};

// tslint:disable-next-line:interface-over-type-literal
export type ArtifactLabels = {
    owner: string;
    repo: string;
    branch: string;
};

const buildTimes: Histogram = new Histogram({
    name: 'circleci_build_time',
    help: 'Build time in seconds',
    labelNames: ['owner', 'repo', 'success', 'branch', 'workflow', 'workflow_job', 'upstream_jobs'],
    buckets: [0, 60, 120, 180, 240, 300, 420, 540, 660, 780, 900, 1200],
});

const codeCoverageLines: Gauge = new Gauge({
    name: 'circleci_code_coverage_lines',
    help: 'Line based code coverage in %',
    labelNames: ['owner', 'repo', 'branch'],
});

const codeCoverageMethods: Gauge = new Gauge({
    name: 'circleci_code_coverage_methods',
    help: 'Method based code coverage in %',
    labelNames: ['owner', 'repo', 'branch'],
});

const codeCoverageClasses: Gauge = new Gauge({
    name: 'circleci_code_coverage_classes',
    help: 'Class based code coverage in %',
    labelNames: ['owner', 'repo', 'branch'],
});

export {
    buildTimes,
    codeCoverageLines,
    codeCoverageMethods,
    codeCoverageClasses,
};
