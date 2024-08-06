// This file is auto-generated by @hey-api/openapi-ts

import {
  createClient,
  createConfig,
  type Options,
} from "@hey-api/client-axios";
import type {
  ListAdvisoriesData,
  ListAdvisoriesError,
  ListAdvisoriesResponse,
  UploadAdvisoryData,
  UploadAdvisoryError,
  UploadAdvisoryResponse,
  UpdateAdvisoryLabelsData,
  UpdateAdvisoryLabelsError,
  UpdateAdvisoryLabelsResponse,
  PatchAdvisoryLabelsData,
  PatchAdvisoryLabelsError,
  PatchAdvisoryLabelsResponse,
  GetAdvisoryData,
  GetAdvisoryError,
  GetAdvisoryResponse,
  DownloadAdvisoryData,
  DownloadAdvisoryError,
  DownloadAdvisoryResponse,
  ListImportersError,
  ListImportersResponse,
  GetImporterData,
  GetImporterError,
  GetImporterResponse,
  CreateImporterData,
  CreateImporterError,
  CreateImporterResponse,
  UpdateImporterData,
  UpdateImporterError,
  UpdateImporterResponse,
  DeleteImporterData,
  DeleteImporterError,
  DeleteImporterResponse,
  EnableImporterData,
  EnableImporterError,
  EnableImporterResponse,
  ForceRunImporterData,
  ForceRunImporterError,
  ForceRunImporterResponse,
  GetImporterReportsData,
  GetImporterReportsError,
  GetImporterReportsResponse,
  ListOrganizationsData,
  ListOrganizationsError,
  ListOrganizationsResponse,
  GetOrganizationData,
  GetOrganizationError,
  GetOrganizationResponse,
  ListProductsData,
  ListProductsError,
  ListProductsResponse,
  GetProductsData,
  GetProductsError,
  GetProductsResponse,
  ListPurlData,
  ListPurlError,
  ListPurlResponse,
  ListBasePurlsData,
  ListBasePurlsError,
  ListBasePurlsResponse,
  GetBasePurlData,
  GetBasePurlError,
  GetBasePurlResponse,
  ListPurlTypesError,
  ListPurlTypesResponse,
  GetPurlTypeData,
  GetPurlTypeError,
  GetPurlTypeResponse,
  GetBasePurlOfTypeData,
  GetBasePurlOfTypeError,
  GetBasePurlOfTypeResponse,
  GetVersionedPurlOfTypeData,
  GetVersionedPurlOfTypeError,
  GetVersionedPurlOfTypeResponse,
  GetVersionedPurlData,
  GetVersionedPurlError,
  GetVersionedPurlResponse,
  GetPurlData,
  GetPurlError,
  GetPurlResponse,
  ListSbomsData,
  ListSbomsError,
  ListSbomsResponse,
  UploadSbomData,
  UploadSbomError,
  UploadSbomResponse,
  ListRelatedSbomsData,
  ListRelatedSbomsError,
  ListRelatedSbomsResponse,
  GetSbomData,
  GetSbomError,
  GetSbomResponse,
  DeleteSbomData,
  DeleteSbomError,
  DeleteSbomResponse,
  UpdateSbomLabelsData,
  UpdateSbomLabelsError,
  UpdateSbomLabelsResponse,
  PatchSbomLabelsData,
  PatchSbomLabelsError,
  PatchSbomLabelsResponse,
  ListPackagesData,
  ListPackagesError,
  ListPackagesResponse,
  ListRelatedPackagesData,
  ListRelatedPackagesError,
  ListRelatedPackagesResponse,
  DownloadSbomData,
  DownloadSbomError,
  DownloadSbomResponse,
  ListVulnerabilitiesData,
  ListVulnerabilitiesError,
  ListVulnerabilitiesResponse,
  GetVulnerabilityData,
  GetVulnerabilityError,
  GetVulnerabilityResponse,
} from "./types.gen";

export const client = createClient(createConfig());

export const listAdvisories = (options?: Options<ListAdvisoriesData>) => {
  return (options?.client ?? client).get<
    ListAdvisoriesResponse,
    ListAdvisoriesError
  >({
    ...options,
    url: "/api/v1/advisory",
  });
};

/**
 * Upload a new advisory
 */
export const uploadAdvisory = (options: Options<UploadAdvisoryData>) => {
  return (options?.client ?? client).post<
    UploadAdvisoryResponse,
    UploadAdvisoryError
  >({
    ...options,
    url: "/api/v1/advisory",
  });
};

/**
 * Replace the labels of an advisory
 */
export const updateAdvisoryLabels = (
  options: Options<UpdateAdvisoryLabelsData>
) => {
  return (options?.client ?? client).put<
    UpdateAdvisoryLabelsResponse,
    UpdateAdvisoryLabelsError
  >({
    ...options,
    url: "/api/v1/advisory/{id}/label",
  });
};

/**
 * Modify existing labels of an advisory
 */
export const patchAdvisoryLabels = (
  options: Options<PatchAdvisoryLabelsData>
) => {
  return (options?.client ?? client).patch<
    PatchAdvisoryLabelsResponse,
    PatchAdvisoryLabelsError
  >({
    ...options,
    url: "/api/v1/advisory/{id}/label",
  });
};

export const getAdvisory = (options: Options<GetAdvisoryData>) => {
  return (options?.client ?? client).get<GetAdvisoryResponse, GetAdvisoryError>(
    {
      ...options,
      url: "/api/v1/advisory/{key}",
    }
  );
};

export const downloadAdvisory = (options: Options<DownloadAdvisoryData>) => {
  return (options?.client ?? client).get<
    DownloadAdvisoryResponse,
    DownloadAdvisoryError
  >({
    ...options,
    url: "/api/v1/advisory/{key}/download",
  });
};

/**
 * List importer configurations
 */
export const listImporters = (options?: Options) => {
  return (options?.client ?? client).get<
    ListImportersResponse,
    ListImportersError
  >({
    ...options,
    url: "/api/v1/importer",
  });
};

/**
 * Get an importer configuration
 */
export const getImporter = (options: Options<GetImporterData>) => {
  return (options?.client ?? client).get<GetImporterResponse, GetImporterError>(
    {
      ...options,
      url: "/api/v1/importer/{name}",
    }
  );
};

/**
 * Create a new importer configuration
 */
export const createImporter = (options: Options<CreateImporterData>) => {
  return (options?.client ?? client).post<
    CreateImporterResponse,
    CreateImporterError
  >({
    ...options,
    url: "/api/v1/importer/{name}",
  });
};

/**
 * Update an existing importer configuration
 */
export const updateImporter = (options: Options<UpdateImporterData>) => {
  return (options?.client ?? client).put<
    UpdateImporterResponse,
    UpdateImporterError
  >({
    ...options,
    url: "/api/v1/importer/{name}",
  });
};

/**
 * Delete an importer configuration
 */
export const deleteImporter = (options: Options<DeleteImporterData>) => {
  return (options?.client ?? client).delete<
    DeleteImporterResponse,
    DeleteImporterError
  >({
    ...options,
    url: "/api/v1/importer/{name}",
  });
};

/**
 * Update an existing importer configuration
 */
export const enableImporter = (options: Options<EnableImporterData>) => {
  return (options?.client ?? client).put<
    EnableImporterResponse,
    EnableImporterError
  >({
    ...options,
    url: "/api/v1/importer/{name}/enabled",
  });
};

/**
 * Force an importer to run as soon as possible
 */
export const forceRunImporter = (options: Options<ForceRunImporterData>) => {
  return (options?.client ?? client).post<
    ForceRunImporterResponse,
    ForceRunImporterError
  >({
    ...options,
    url: "/api/v1/importer/{name}/force",
  });
};

/**
 * Get reports for an importer
 */
export const getImporterReports = (
  options: Options<GetImporterReportsData>
) => {
  return (options?.client ?? client).get<
    GetImporterReportsResponse,
    GetImporterReportsError
  >({
    ...options,
    url: "/api/v1/importer/{name}/report",
  });
};

export const listOrganizations = (options?: Options<ListOrganizationsData>) => {
  return (options?.client ?? client).get<
    ListOrganizationsResponse,
    ListOrganizationsError
  >({
    ...options,
    url: "/api/v1/organization",
  });
};

export const getOrganization = (options: Options<GetOrganizationData>) => {
  return (options?.client ?? client).get<
    GetOrganizationResponse,
    GetOrganizationError
  >({
    ...options,
    url: "/api/v1/organization/{id}",
  });
};

export const listProducts = (options?: Options<ListProductsData>) => {
  return (options?.client ?? client).get<
    ListProductsResponse,
    ListProductsError
  >({
    ...options,
    url: "/api/v1/product",
  });
};

export const getProducts = (options: Options<GetProductsData>) => {
  return (options?.client ?? client).get<GetProductsResponse, GetProductsError>(
    {
      ...options,
      url: "/api/v1/product/{id}",
    }
  );
};

export const listPurl = (options?: Options<ListPurlData>) => {
  return (options?.client ?? client).get<ListPurlResponse, ListPurlError>({
    ...options,
    url: "/api/v1/purl",
  });
};

export const listBasePurls = (options?: Options<ListBasePurlsData>) => {
  return (options?.client ?? client).get<
    ListBasePurlsResponse,
    ListBasePurlsError
  >({
    ...options,
    url: "/api/v1/purl/base",
  });
};

export const getBasePurl = (options: Options<GetBasePurlData>) => {
  return (options?.client ?? client).get<GetBasePurlResponse, GetBasePurlError>(
    {
      ...options,
      url: "/api/v1/purl/base/{key}",
    }
  );
};

export const listPurlTypes = (options?: Options) => {
  return (options?.client ?? client).get<
    ListPurlTypesResponse,
    ListPurlTypesError
  >({
    ...options,
    url: "/api/v1/purl/type",
  });
};

export const getPurlType = (options: Options<GetPurlTypeData>) => {
  return (options?.client ?? client).get<GetPurlTypeResponse, GetPurlTypeError>(
    {
      ...options,
      url: "/api/v1/purl/type/{type}",
    }
  );
};

export const getBasePurlOfType = (options: Options<GetBasePurlOfTypeData>) => {
  return (options?.client ?? client).get<
    GetBasePurlOfTypeResponse,
    GetBasePurlOfTypeError
  >({
    ...options,
    url: "/api/v1/purl/type/{type}/{namespace_and_name}",
  });
};

export const getVersionedPurlOfType = (
  options: Options<GetVersionedPurlOfTypeData>
) => {
  return (options?.client ?? client).get<
    GetVersionedPurlOfTypeResponse,
    GetVersionedPurlOfTypeError
  >({
    ...options,
    url: "/api/v1/purl/type/{type}/{namespace_and_name}@{version}",
  });
};

export const getVersionedPurl = (options: Options<GetVersionedPurlData>) => {
  return (options?.client ?? client).get<
    GetVersionedPurlResponse,
    GetVersionedPurlError
  >({
    ...options,
    url: "/api/v1/purl/version/{key}",
  });
};

export const getPurl = (options: Options<GetPurlData>) => {
  return (options?.client ?? client).get<GetPurlResponse, GetPurlError>({
    ...options,
    url: "/api/v1/purl/{key}",
  });
};

export const listSboms = (options?: Options<ListSbomsData>) => {
  return (options?.client ?? client).get<ListSbomsResponse, ListSbomsError>({
    ...options,
    url: "/api/v1/sbom",
  });
};

/**
 * Upload a new SBOM
 */
export const uploadSbom = (options: Options<UploadSbomData>) => {
  return (options?.client ?? client).post<UploadSbomResponse, UploadSbomError>({
    ...options,
    url: "/api/v1/sbom",
  });
};

/**
 * Find all SBOMs containing the provided package.
 * The package can be provided either via a PURL or using the ID of a package as returned by
 * other APIs, but not both.
 */
export const listRelatedSboms = (options?: Options<ListRelatedSbomsData>) => {
  return (options?.client ?? client).get<
    ListRelatedSbomsResponse,
    ListRelatedSbomsError
  >({
    ...options,
    url: "/api/v1/sbom/by-package",
  });
};

export const getSbom = (options: Options<GetSbomData>) => {
  return (options?.client ?? client).get<GetSbomResponse, GetSbomError>({
    ...options,
    url: "/api/v1/sbom/{id}",
  });
};

export const deleteSbom = (options: Options<DeleteSbomData>) => {
  return (options?.client ?? client).delete<
    DeleteSbomResponse,
    DeleteSbomError
  >({
    ...options,
    url: "/api/v1/sbom/{id}",
  });
};

/**
 * Replace the labels of an SBOM
 */
export const updateSbomLabels = (options: Options<UpdateSbomLabelsData>) => {
  return (options?.client ?? client).put<
    UpdateSbomLabelsResponse,
    UpdateSbomLabelsError
  >({
    ...options,
    url: "/api/v1/sbom/{id}/label",
  });
};

/**
 * Modify existing labels of an SBOM
 */
export const patchSbomLabels = (options: Options<PatchSbomLabelsData>) => {
  return (options?.client ?? client).patch<
    PatchSbomLabelsResponse,
    PatchSbomLabelsError
  >({
    ...options,
    url: "/api/v1/sbom/{id}/label",
  });
};

/**
 * Search for packages of an SBOM
 */
export const listPackages = (options: Options<ListPackagesData>) => {
  return (options?.client ?? client).get<
    ListPackagesResponse,
    ListPackagesError
  >({
    ...options,
    url: "/api/v1/sbom/{id}/packages",
  });
};

/**
 * Search for related packages in an SBOM
 */
export const listRelatedPackages = (
  options: Options<ListRelatedPackagesData>
) => {
  return (options?.client ?? client).get<
    ListRelatedPackagesResponse,
    ListRelatedPackagesError
  >({
    ...options,
    url: "/api/v1/sbom/{id}/related",
  });
};

export const downloadSbom = (options: Options<DownloadSbomData>) => {
  return (options?.client ?? client).get<
    DownloadSbomResponse,
    DownloadSbomError
  >({
    ...options,
    url: "/api/v1/sbom/{key}/download",
  });
};

export const listVulnerabilities = (
  options?: Options<ListVulnerabilitiesData>
) => {
  return (options?.client ?? client).get<
    ListVulnerabilitiesResponse,
    ListVulnerabilitiesError
  >({
    ...options,
    url: "/api/v1/vulnerability",
  });
};

export const getVulnerability = (options: Options<GetVulnerabilityData>) => {
  return (options?.client ?? client).get<
    GetVulnerabilityResponse,
    GetVulnerabilityError
  >({
    ...options,
    url: "/api/v1/vulnerability/{id}",
  });
};
