export type WithUiId<T> = T & { _ui_unique_id: string };

/** Mark an object as "New" therefore does not have an `id` field. */
export type New<T extends { id: number }> = Omit<T, "id">;

export type Labels = Record<string, string>;
export interface HubFilter {
  field: string;
  operator?: "=" | "!=" | "~" | ">" | ">=" | "<" | "<=";
  value:
    | string
    | number
    | {
        list: (string | number)[];
        operator?: "AND" | "OR";
      };
}

export interface HubRequestParams {
  filters?: HubFilter[];
  sort?: {
    field: string;
    direction: "asc" | "desc";
  };
  page?: {
    pageNumber: number; // 1-indexed
    itemsPerPage: number;
  };
}

export interface HubPaginatedResult<T> {
  data: T[];
  total: number;
  params: HubRequestParams;
}

// Organizations

export interface Organization {
  id: string;
  name: string;
}

// Products

export interface Product {
  id: string;
  name: string;
  vendor?: {
    cpe_key: string;
    id: string;
    name: string;
    website: string;
  };
  versions?: {
    id: string;
    version: string;
    sbom_id: string;
  }[];
}

// Advisories

export type Severity = "none" | "low" | "medium" | "high" | "critical";

export interface Advisory {
  uuid: string;
  identifier: string;
  title: string;
  published?: string;
  modified?: string;
  withdrawn: string;
  issuer?: {
    id: string;
    cpe_key: string;
    name?: string;
    website?: string;
  };
  hashes?: string[];
  labels?: Labels;
  average_score?: number;
  average_severity?: Severity;
  vulnerabilities?: VulnerabilityWithinAdvisory[];
}

export type SbomStatus =
  | "fixed"
  | "not_affected"
  | "known_not_affected"
  | "affected";

export interface AdvisoryIssuer {
  name?: string;
  website?: string;
}

export interface Sbom {
  id: string;
  status: SbomStatus[];
}

type Purl = {
  version: string;
  base_purl: {
    uuid: string;
    purl: string;
  };
  context: { cpe: string };
};

export type Purls = Record<SbomStatus, Purl[]>;

export interface AdvisoryWithinVulnerability {
  identifier: string;
  uuid: string;
  title: string;
  published?: string;
  modified?: string;
  widhdraw?: string;
  issuer?: AdvisoryIssuer;
  score?: number;
  severity?: Severity;
  purls?: Purls;
  sboms?: Sbom[];
}

export interface AdvisoryWithinPackageStatus {
  context: {
    cpe: string;
  };
  status: SbomStatus;
  vulnerability: {
    identifier: string;
  };
}

export interface AdvisoryWithinPackage {
  uuid: string;
  identifier: string;
  title: string;
  published?: string;
  modified?: string;
  issuer?: AdvisoryIssuer;
  labels?: Labels;
  status: AdvisoryWithinPackageStatus[];
}

// Vulnerability

export interface Vulnerability {
  identifier: string;
  title?: string;
  description?: string;
  average_score?: number;
  average_severity?: Severity;
  cwe: string;
  discovered?: string;
  published?: string;
  modified?: string;
  withdrawn?: string;
  released?: string;
  non_normative: boolean;
  advisories: AdvisoryWithinVulnerability[];
}

export interface VulnerabilityWithinAdvisory {
  identifier: string;
  title: string;
  description: string;
  score: Severity;
  severity: Severity;
  discovered?: string;
  modified?: string;
  published?: string;
  released?: string;
  withdrawn?: string;
  cwe?: string;
  normative: true;
}

// Package

export interface Package {
  uuid: string;
  purl: string;
  advisories?: AdvisoryWithinPackage[];
}

export interface PackageWithinSBOM {
  id: string;
  name: string;
  version: string;
  purl?: string[];
  cpe?: string[];
}

// SBOM

export type SbomDescription = {
  name: string;
  version: string;
};

export interface SBOM {
  id: string;
  name: string;
  authors: string[];
  published: string;
  described_by?: SbomDescription[];

  hashes?: string[];
  labels?: Labels;
}

// Importer

export type ImporterStatus = "waiting" | "running";

export const ALL_IMPORTER_TYPES = ["sbom", "csaf", "osv", "cve"] as const;
export type ImporterType = (typeof ALL_IMPORTER_TYPES)[number];

export interface Importer {
  name: string;
  configuration: ImporterConfiguration;
  state?: ImporterStatus;
}

export type ImporterConfiguration = {
  [key in ImporterType]?: ImporterConfigurationValues;
};

export interface ImporterConfigurationValues {
  description: string;
  period: string;
  source: string;
  disabled: boolean;
  v3Signatures: boolean;
  onlyPatterns?: string[];
  keys?: string[];
}

export interface Report {
  startDate: string;
  endDate: string;
  numberOfItems: string;
}

export interface ImporterReport {
  id: string;
  error?: string;
  report: Report;
}

export interface ImporterReportDetails {
  startDate: string;
  endDate: string;
  numberOfItems: string;
}

// Purl

export interface DecomposedPurl {
  type: string;
  name: string;
  namespace?: string;
  version?: string;
  qualifiers?: Labels;
  path?: string;
}
