// Generated types from OpenAPI specification
// DO NOT EDIT - This file is auto-generated

export interface EnumEntity {
  id: string;
  name: string;
  description?: string;
  color?: string;
  icon?: string;
  active: boolean;
  parent?: string;
  no: number;
  sortOrder?: number;
  isFinalOption?: boolean;
  appSlug: string;
  dataSourceSlug: string;
  fieldSlug: string;
}

export interface AppEntity {
  id?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  name: string;
  slug?: string;
  logo_url?: string;
  status?: string;
}

export interface QueryCalculationRuleParams {
  func: 'count' | 'sum' | 'avg' | 'min' | 'max';
  field: string;
  isDistinct: boolean;
  minValue?: number;
  maxValue?: number;
  numberType: 'int' | 'decimal';
}

export interface QueryFilterRuleParams {
  field: string;
  operator: string;
  value: string;
}

export interface QueryFilterGroupParams {
  rules: any[];
  combinator: 'and' | 'or';
  not: boolean;
}

export interface DataSourceFieldEntity {
  id?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  type: 'field-checkbox' | 'field-codeEditor' | 'field-color' | 'field-currency' | 'field-date' | 'field-dateTime' | 'field-display' | 'field-docEditor' | 'field-duration' | 'field-email' | 'field-emailEditor' | 'field-file' | 'field-formula' | 'field-htmlEditor' | 'field-icon' | 'field-identity' | 'field-image' | 'field-inlineData' | 'field-inlineForm' | 'field-json' | 'field-list' | 'field-money' | 'field-multiSelect' | 'field-number' | 'field-phone' | 'field-radioGroup' | 'field-rating' | 'field-relatedField' | 'field-relation' | 'field-select' | 'field-status' | 'field-switch' | 'field-taskList' | 'field-text' | 'field-textarea' | 'field-time' | 'field-todo' | 'field-url' | 'field-userMultiSelect' | 'field-userSelect' | 'field-code' | 'field-approvalStatus' | 'field-locationSelect' | 'field-queryBuilder' | 'field-dynamic' | 'field-schema' | 'field-schemaRepeater' | 'field-fileStorageFolder' | 'field-button' | 'field-autonumber' | 'field-dateRange';
  name: string;
  slug?: string;
  status: number;
  ownership?: 'APP' | 'CUSTOM' | 'PRODUCT' | 'SYSTEM' | 'USER';
  default_value: string;
  read_only: boolean;
  relation_data_source_id: string;
}

export interface DataSourceEntity {
  id?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  type: 'simple' | 'advanced' | 'external' | 'system' | 'msSharePoint' | 'msGraph';
  name: string;
  description: string;
  title: string;
  slug?: string;
  status: number;
  ownership?: 'APP' | 'CUSTOM' | 'PRODUCT' | 'SYSTEM' | 'USER';
  read_only: boolean;
  fields: any[];
}

export interface BaseEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
}

export interface RelatedRelationEntity {
  id?: string;
  name?: string;
}

export interface RelatedUserEntity {
  id?: string;
  name?: string;
}

export interface RelatedEnumEntity {
  id?: string;
  name?: string;
}

export interface RecordDeleteParams {
  recordIds: string[];
  childActions?: Record<string, any>;
}

export interface UserEntity {
  id?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  email: string;
  firstname: string;
  lastname: string;
  gender: string;
  mobile: string;
  time_zone: string;
  language: string;
  job_title: string;
  primary_role: string;
  role: any[];
  date_of_birth: string;
  notify_user: boolean;
  tenant_user_hierarchy_unit_id: string;
  name: string;
  no: string;
}

export interface UserCreateParams {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  gender: string;
  mobile: string;
  time_zone: string;
  language: string;
  job_title: string;
  primary_role: string;
  role: any[];
  date_of_birth: string;
  notify_user: boolean;
  tenant_user_hierarchy_unit_id: string;
}

export interface UserUpdateParams {
  password?: string;
  firstname?: string;
  lastname?: string;
  gender?: string;
  mobile?: string;
  time_zone?: string;
  language?: string;
  job_title?: string;
  primary_role?: string;
  role?: any[];
  date_of_birth?: string;
  notify_user?: boolean;
  tenant_user_hierarchy_unit_id?: string;
}

export interface UserDeviceDto {
  platform: string;
  push_token: string;
  enabled?: boolean;
}

export interface BaseActivityEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  subject: string;
  end_date?: string;
  start_date?: string;
  description?: string;
}

export interface BaseCalendarEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  start_date?: string;
}

export interface BaseCityEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  country: { id: string; name: string } | string;
  name: string;
  latitude?: string;
  longitude?: string;
  flag?: number;
  wikidataid?: string;
}

export interface BaseContactEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  name?: string;
  mobile?: string;
  job_title?: string;
  email?: string;
  organization?: { id: string; name: string } | string;
}

export interface BaseCountryEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  phone_code?: string;
  currency_name?: string;
  name: string;
  original_name?: string;
  language_codes?: string;
  iso3?: string;
  numeric_code?: string;
  iso2?: string;
  currency?: string;
  currency_symbol?: string;
  native?: string;
  capital?: string;
  region?: string;
  subregion?: string;
  nationality?: string;
  timezones?: string;
  translations?: string;
  tld?: string;
  emoji?: string;
  emojiu?: string;
  flag?: number;
  wikidataid?: string;
  latitude?: string;
  longitude?: string;
}

export interface BaseDocymentEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  commontext?: string;
}

export interface BaseEventEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  calendar?: { id: string; name: string } | string;
  event_notes?: Record<string, any>;
}

export interface BaseMessageEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  subject: string;
  input_token?: number;
  original_input_token?: number;
  ranker_token?: number;
  tenant_view_id?: string;
  body_json?: Record<string, any>;
  sent_at?: string;
  direction?: { id: string; name: string } | any;
  message_id?: string;
  output_token?: number;
  sender_phone?: string;
  tenant_assistant_id?: { id: string; name: string } | string;
  sender_name?: string;
  files?: Record<string, any>;
  sender_email?: string;
  message_source?: { id: string; name: string } | any;
  sender_cc?: string;
  sender_bcc?: string;
  send_to_email?: string;
  core_ai_model_id?: { id: string; name: string } | string;
  tool_calls?: Record<string, any>;
  tenant_ai_connection_id?: { id: string; name: string } | string;
  draft?: boolean;
  message_type?: { id: string; name: string } | any;
  thread?: { id: string; name: string } | string;
  body_text?: string;
  body?: string;
}

export interface BaseOrganizationEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  city?: string;
  tax_area?: string;
  website?: string;
  phone?: string;
  name: string;
  tax_number?: string;
  industry?: { id: string; name: string } | any;
  commercial_title: string;
  email?: string;
  status?: { id: string; name: string } | any;
  type?: { id: string; name: string } | any;
  country?: { id: string; name: string } | string;
  district?: string;
  address?: string;
}

export interface BaseProjectEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  name: string;
  followers?: { id: string; name: string } | string[];
  description?: Record<string, any>;
  image?: Record<string, any>;
  portfolio?: { id: string; name: string } | string;
  status?: { id: string; name: string } | any;
  progress?: string;
}

export interface BaseSectionsEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  project?: { id: string; name: string } | string;
}

export interface BaseStateEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  country_id: { id: string; name: string } | string;
}

export interface BaseTaskEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  parent?: { id: string; name: string } | string;
  status?: { id: string; name: string } | any;
  task_notes?: Record<string, any>;
  conversation_channel?: any;
  section?: { id: string; name: string } | string;
  sort_order?: number;
  project?: { id: string; name: string } | string;
  followers?: { id: string; name: string } | string[];
  organization?: { id: string; name: string } | string;
  feature?: { id: string; name: string } | string;
}

export interface BaseThreadEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  subject?: string;
  sender_phone?: string;
  request_type?: { id: string; name: string } | any;
  incoming_channel?: { id: string; name: string } | any;
  closed_on?: string;
  color?: string;
  parent_record_id?: { id: string; name: string } | string;
  follow_up_on?: string;
  sender_cc?: string;
  followers?: { id: string; name: string } | string[];
  icon?: string;
  sender_company?: string;
  body?: string;
  contact?: { id: string; name: string } | string;
  sender_email?: string;
  tenant_data_source_id?: { id: string; name: string } | string;
  core_ai_assistant_id?: { id: string; name: string } | string;
  reminder_message?: string;
  starred?: boolean;
  sender_bcc?: string;
  notify_on?: string;
  body_text?: string;
  organization?: { id: string; name: string } | string;
  priority?: { id: string; name: string } | any;
  ai_generation_status?: { id: string; name: string } | any;
  case_status?: { id: string; name: string } | any;
  ai_generation_steps?: Record<string, any>;
  category?: { id: string; name: string } | string;
  product?: { id: string; name: string } | string;
  hold_reason?: { id: string; name: string } | string;
  message_id?: string;
  send_to_email?: string;
  sender_name?: string;
}

export interface BaseTimeEntryEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  billing_status?: { id: string; name: string } | any;
  contact_billed?: string;
  duration: number;
  time_and_material_report?: { id: string; name: string } | string;
  record_owner_billed?: { id: string; name: string } | string;
  duration_billable?: number;
  description_billed?: string;
  billable?: boolean;
  duration_billed?: number;
  date_billed?: string;
  description: string;
  task?: { id: string; name: string } | string;
  issue?: { id: string; name: string } | string;
  contact?: string;
  date: string;
  operation?: { id: string; name: string } | string;
}

export interface CrmDealEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  name: string;
  deal_value?: number;
  expected_closing_date?: string;
  follow_up_on?: string;
  description?: string;
  customer_type?: { id: string; name: string } | any;
  expected_revenue?: number;
  organization?: { id: string; name: string } | string;
  hot_prospect?: boolean;
  lead_source?: { id: string; name: string } | any;
  contact_person?: { id: string; name: string } | string;
  followers?: { id: string; name: string } | string[];
  stage?: { id: string; name: string } | any;
  country?: { id: string; name: string } | string;
}

export interface CrmLeadEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  company_name?: string;
  state?: string;
  City?: string;
  town?: string;
  email?: string;
  address?: string;
  mobile?: string;
  contact_message?: string;
  contact_person?: string;
  tenant_user_id?: { id: string; name: string } | string;
  single_selection?: { id: string; name: string } | any;
  q2_how_many_employee?: { id: string; name: string } | any;
  what_is_your_role?: { id: string; name: string } | any;
  what_is_your_general_practice_area?: { id: string; name: string } | any;
  tenant?: { id: string; name: string } | string;
  country?: { id: string; name: string } | string;
  lead_source?: { id: string; name: string } | any;
  lead_type?: { id: string; name: string } | any;
  contact_consent?: boolean;
  kvkk_consent?: boolean;
  firstname: string;
  lastname?: string;
  how_can_we_help_you?: string;
  q1_how_did_hear?: { id: string; name: string } | any;
  form_schema_name?: string;
  subject?: string;
  company_website?: string;
  role?: string;
  product_name?: { id: string; name: string } | any;
  related_product?: { id: string; name: string } | string;
  lead_form?: { id: string; name: string } | any;
  other_legal_software?: string;
  how_did_you_hear_about_us?: { id: string; name: string } | any;
  q3_what_manage_first_other?: string;
  your_first_area_to_solve?: { id: string; name: string } | any;
  q1_how_did_hear_other?: string;
  im_already_using_legal_software?: { id: string; name: string } | any;
  how_did_you_hear_about_us_other?: string;
  visitor_info?: Record<string, any>;
  lead_status_?: { id: string; name: string } | any;
  are_you_familiar_to_legal_software?: { id: string; name: string } | any;
  q3_what_manage_first?: { id: string; name: string } | any;
}

export interface CrmNullEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  account_name?: { id: string; name: string } | string;
}

export interface Custom2022-staff-salariesEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  kullanici_secimi_1?: { id: string; name: string } | string;
  january?: number;
  march_usd?: number;
  september_usd?: number;
  october_usd?: number;
  november_usd?: number;
  february?: number;
  may?: number;
  march?: number;
  september?: number;
  december_usd?: number;
  november?: number;
  total_try?: number;
  april_usd?: number;
  august_usd?: number;
  january_usd?: number;
  april?: number;
  june?: number;
  july?: number;
  may_usd?: number;
  august?: number;
  february_usd?: number;
  october?: number;
  total_usd?: number;
  december?: number;
}

export interface CustomAgentEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  description?: string;
  labels?: { id: string; name: string } | any;
  source?: string;
}

export interface CustomAiCaseStudyEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  inspiration_link?: string;
  screenshot?: Record<string, any>;
  tag?: { id: string; name: string } | any;
  complexity_level?: { id: string; name: string } | any;
}

export interface CustomAssetsEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  serial_number: string;
  mac_address?: string;
  _of_assets: number;
  confidentiality: number;
  accessibility: number;
  integrity: number;
  cia_avg: number;
  location: { id: string; name: string } | any;
  department: { id: string; name: string } | any;
  assigned_to?: { id: string; name: string } | string;
  asset_owner: { id: string; name: string } | string;
  reserve_owner: { id: string; name: string } | string;
  asset_group: { id: string; name: string } | any;
  asset_type: { id: string; name: string } | any;
  status?: { id: string; name: string } | any;
  confidentiality_level: { id: string; name: string } | any;
}

export interface CustomCapaFollowupEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  autonumber_id_capa?: number;
}

export interface CustomCapaRequestEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  root_cause_analysis?: string;
  action_taken?: string;
  action_date?: string;
  conclusion?: string;
  ims_manager?: { id: string; name: string } | string;
  request_type: { id: string; name: string } | any;
  capa_status?: { id: string; name: string } | any;
}

export interface CustomDataProviderEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  link?: string;
  labels?: { id: string; name: string } | any;
}

export interface CustomEdition-featuresEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  edition?: { id: string; name: string } | string;
  feature?: { id: string; name: string } | string;
}

export interface CustomFeatureEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  project?: { id: string; name: string } | string;
  status?: { id: string; name: string } | any;
  start_date?: string;
  end_date?: string;
  goal?: { id: string; name: string } | string;
}

export interface CustomFeatureTestEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  description?: string;
  done?: Record<string, any>;
  beta?: boolean;
  alpha?: boolean;
  file?: Record<string, any>;
  task_list_panel?: Record<string, any>;
  labels?: { id: string; name: string } | any;
  related_feature?: { id: string; name: string } | string;
}

export interface CustomFinancial-pageEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  toplam?: number;
  haziran?: number;
  temmuz?: number;
  aralik?: number;
  mart_usd?: number;
  mart?: number;
  ocak?: number;
  agustos?: number;
  eylul?: number;
  ocak_usd?: number;
  mayis?: number;
  sayi_1?: number;
  subat?: number;
  nisan?: number;
  sayi?: number;
  sayi_2?: number;
  ekim?: number;
  kasim?: number;
  subat_usd?: number;
  sayi_3?: number;
  nisan_usd?: number;
  mayis_usd?: number;
  haziran_usd?: number;
  temmuz_usd?: number;
  agustos_usd?: number;
  eylul_usd?: number;
  ekim_usd?: number;
  kasim_usd?: number;
  aralik_usd?: number;
  harcama_kalemi?: string;
  toplam_usd?: number;
  kullanici_secimi?: { id: string; name: string } | string;
}

export interface CustomFr6envanterEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  assignees?: { id: string; name: string } | string;
  asset?: { id: string; name: string } | string;
  security_class?: { id: string; name: string } | string;
  confidentiality: number;
  asset_class?: { id: string; name: string } | any;
  custodian?: { id: string; name: string } | string;
  department?: { id: string; name: string } | string;
  availability: number;
  cia_avg?: number;
  integrity: number;
  owner?: { id: string; name: string } | string;
}

export interface CustomGoalEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  due_date?: string;
  start_date?: string;
  status?: { id: string; name: string } | any;
  category?: { id: string; name: string } | any;
}

export interface CustomIncome-and-spendingsEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  date?: string;
  reference?: string;
  type?: { id: string; name: string } | any;
  spent?: number;
  descriptions?: string;
  kisa_metin?: string;
  received?: number;
}

export interface CustomIssueEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  name: string;
  description?: Record<string, any>;
  closed_on?: string;
  infected?: { id: string; name: string } | any;
  commonimage?: Record<string, any>;
  assigned?: { id: string; name: string } | string;
  priority?: { id: string; name: string } | any;
  status?: { id: string; name: string } | any;
  project?: { id: string; name: string } | string;
}

export interface CustomJobapplicationEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  name: string;
  email?: string;
  phone?: string;
  date?: string;
}

export interface CustomMarkettingIssueEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  closed_on?: string;
  assigned?: { id: string; name: string } | string;
  image?: Record<string, any>;
  status?: { id: string; name: string } | any;
  priority?: { id: string; name: string } | any;
}

export interface CustomMcpListsEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  phone?: string;
  tools?: Record<string, any>;
  url?: string;
  provider?: { id: string; name: string } | any;
  category?: { id: string; name: string } | any;
}

export interface CustomOnboardingPlanEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  attachments?: Record<string, any>;
  contact_for_onboarding?: { id: string; name: string } | string;
  date?: string;
  status?: { id: string; name: string } | any;
  user?: { id: string; name: string } | string;
  description?: string;
  organization_name?: { id: string; name: string } | string;
}

export interface CustomPersonnelEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  shorthand?: string;
}

export interface CustomPricing-featuresEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  description?: string;
  category?: { id: string; name: string } | string;
}

export interface CustomProductEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  product_category?: { id: string; name: string } | any;
  text?: string;
  checked?: boolean;
  usage_unit?: { id: string; name: string } | any;
  unit_price?: number;
  taxable?: boolean;
  purchase_price?: number;
  max_discount?: number;
  stripe_id?: string;
  description?: string;
  product_image?: Record<string, any>;
  product_name_tr?: string;
  product_name_rnd_tr?: string;
  vat?: number;
  brand?: { id: string; name: string } | any;
  number?: number;
}

export interface CustomProductFeatureEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  revenue?: { id: string; name: string } | any;
  team_effort?: number;
  end_date?: string;
  start_date?: string;
  status?: { id: string; name: string } | any;
  stage?: { id: string; name: string } | any;
  category?: { id: string; name: string } | any;
  label?: { id: string; name: string } | any;
  webpage?: { id: string; name: string } | any;
  release?: { id: string; name: string } | string;
  product: { id: string; name: string } | string;
}

export interface CustomProductValueScoringEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  development_stage?: number;
  product: { id: string; name: string } | string;
  niche?: boolean;
  must_to_have?: boolean;
  compliance_required?: boolean;
  in_house_expertise?: boolean;
  technical_complexity?: { id: string; name: string } | any;
  time_to_market?: { id: string; name: string } | any;
  existing_channels?: { id: string; name: string } | any;
  customer_acquisition_cost?: { id: string; name: string } | any;
  ease_of_use?: { id: string; name: string } | any;
  enterprise_business?: { id: string; name: string } | any;
}

export interface CustomPromptsEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  content?: any;
}

export interface CustomProviderDevelopmentItemEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  auth_type?: { id: string; name: string } | any;
  oauth2_credentials?: { id: string; name: string } | any;
  auth_endpoint?: { id: string; name: string } | any;
  token_endpoint?: { id: string; name: string } | any;
  exchange_token?: boolean;
  tenant___subaccounts?: { id: string; name: string } | any;
  base_url?: { id: string; name: string } | any;
  ds_error_transformer?: { id: string; name: string } | any;
  ds_pagination_settings?: { id: string; name: string } | any;
  parent_ds?: { id: string; name: string } | any;
  namespace?: { id: string; name: string } | any;
  ds_method?: { id: string; name: string } | any;
  ac_batch_conf?: { id: string; name: string } | any;
  ac_customize?: { id: string; name: string } | any;
  ac_response_fields?: { id: string; name: string } | any;
  w_creation_method?: { id: string; name: string } | any;
  problem_note?: string;
  api_type?: { id: string; name: string } | any;
  links?: Record<string, any>;
  dynamic_datasource?: { id: string; name: string } | any;
  issues_ticket?: { id: string; name: string } | any;
  category?: { id: string; name: string } | any;
  priority?: { id: string; name: string } | any;
  status?: { id: string; name: string } | any;
  provider_settings?: { id: string; name: string } | any;
  detailed_comment?: { id: string; name: string } | any;
  note?: string;
  datasources?: { id: string; name: string } | any;
  actions?: { id: string; name: string } | any;
  webhooks?: { id: string; name: string } | any;
}

export interface CustomReleasePlanEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  start_date?: string;
  end_date?: string;
  product?: { id: string; name: string } | string;
}

export interface CustomSaasAppEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  website?: string;
  source?: { id: string; name: string } | any;
  labels?: { id: string; name: string } | any;
}

export interface CustomTenantEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  completed_working_date?: string;
  estimated_working_hours?: string;
  pricing_plan?: { id: string; name: string } | any;
  relation_link?: { id: string; name: string } | string;
  cs?: { id: string; name: string } | string;
  publication_date?: string;
  date_of_attendance?: string;
  contract?: { id: string; name: string } | any;
  live?: boolean;
  tenant_no?: number;
}

export interface CustomVdf-roadmapEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  start_date?: string;
  end_date?: string;
  not?: string;
}

export interface CustomWebFormEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  name: string;
  email?: string;
}

export interface CustomNullEntity {
  id?: string;
  record_owner?: string;
  created_on?: string;
  created_by?: string;
  last_modified_on?: string;
  last_modified_by?: string;
  serial_imei_no?: string;
  model?: string;
  mac_adress?: string;
  asset_id?: number;
  asset_type?: { id: string; name: string } | any;
  brand_station?: { id: string; name: string } | any;
}

// Zod schemas for validation
import { z } from 'zod';

export const EnumEntitySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  color: z.string().optional(),
  icon: z.string().optional(),
  active: z.boolean(),
  parent: z.string().optional(),
  no: z.number(),
  sortOrder: z.number().optional(),
  isFinalOption: z.boolean().optional(),
  appSlug: z.string(),
  dataSourceSlug: z.string(),
  fieldSlug: z.string()
});

export const AppEntitySchema = z.object({
  id: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  name: z.string(),
  slug: z.string().optional(),
  logo_url: z.string().optional(),
  status: z.string().optional()
});

export const QueryCalculationRuleParamsSchema = z.object({
  func: z.union([z.literal('count'), z.literal('sum'), z.literal('avg'), z.literal('min'), z.literal('max')]),
  field: z.string(),
  isDistinct: z.boolean(),
  minValue: z.number().optional(),
  maxValue: z.number().optional(),
  numberType: z.union([z.literal('int'), z.literal('decimal')])
});

export const QueryFilterRuleParamsSchema = z.object({
  field: z.string(),
  operator: z.string(),
  value: z.string()
});

export const QueryFilterGroupParamsSchema = z.object({
  rules: z.array(z.any()),
  combinator: z.union([z.literal('and'), z.literal('or')]),
  not: z.boolean()
});

export const DataSourceFieldEntitySchema = z.object({
  id: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  type: z.union([z.literal('field-checkbox'), z.literal('field-codeEditor'), z.literal('field-color'), z.literal('field-currency'), z.literal('field-date'), z.literal('field-dateTime'), z.literal('field-display'), z.literal('field-docEditor'), z.literal('field-duration'), z.literal('field-email'), z.literal('field-emailEditor'), z.literal('field-file'), z.literal('field-formula'), z.literal('field-htmlEditor'), z.literal('field-icon'), z.literal('field-identity'), z.literal('field-image'), z.literal('field-inlineData'), z.literal('field-inlineForm'), z.literal('field-json'), z.literal('field-list'), z.literal('field-money'), z.literal('field-multiSelect'), z.literal('field-number'), z.literal('field-phone'), z.literal('field-radioGroup'), z.literal('field-rating'), z.literal('field-relatedField'), z.literal('field-relation'), z.literal('field-select'), z.literal('field-status'), z.literal('field-switch'), z.literal('field-taskList'), z.literal('field-text'), z.literal('field-textarea'), z.literal('field-time'), z.literal('field-todo'), z.literal('field-url'), z.literal('field-userMultiSelect'), z.literal('field-userSelect'), z.literal('field-code'), z.literal('field-approvalStatus'), z.literal('field-locationSelect'), z.literal('field-queryBuilder'), z.literal('field-dynamic'), z.literal('field-schema'), z.literal('field-schemaRepeater'), z.literal('field-fileStorageFolder'), z.literal('field-button'), z.literal('field-autonumber'), z.literal('field-dateRange')]),
  name: z.string(),
  slug: z.string().optional(),
  status: z.number(),
  ownership: z.union([z.literal('APP'), z.literal('CUSTOM'), z.literal('PRODUCT'), z.literal('SYSTEM'), z.literal('USER')]).optional(),
  default_value: z.string(),
  read_only: z.boolean(),
  relation_data_source_id: z.string()
});

export const DataSourceEntitySchema = z.object({
  id: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  type: z.union([z.literal('simple'), z.literal('advanced'), z.literal('external'), z.literal('system'), z.literal('msSharePoint'), z.literal('msGraph')]),
  name: z.string(),
  description: z.string(),
  title: z.string(),
  slug: z.string().optional(),
  status: z.number(),
  ownership: z.union([z.literal('APP'), z.literal('CUSTOM'), z.literal('PRODUCT'), z.literal('SYSTEM'), z.literal('USER')]).optional(),
  read_only: z.boolean(),
  fields: z.array(z.any())
});

export const BaseEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional()
});

export const RelatedRelationEntitySchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional()
});

export const RelatedUserEntitySchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional()
});

export const RelatedEnumEntitySchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional()
});

export const RecordDeleteParamsSchema = z.object({
  recordIds: z.array(z.string()),
  childActions: z.record(z.any()).optional()
});

export const UserEntitySchema = z.object({
  id: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  email: z.string().email(),
  firstname: z.string(),
  lastname: z.string(),
  gender: z.string().uuid(),
  mobile: z.string(),
  time_zone: z.string(),
  language: z.string(),
  job_title: z.string(),
  primary_role: z.string().uuid(),
  role: z.array(z.any()),
  date_of_birth: z.string(),
  notify_user: z.boolean(),
  tenant_user_hierarchy_unit_id: z.string(),
  name: z.string(),
  no: z.string()
});

export const UserCreateParamsSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  gender: z.string().uuid(),
  mobile: z.string(),
  time_zone: z.string(),
  language: z.string(),
  job_title: z.string(),
  primary_role: z.string().uuid(),
  role: z.array(z.any()),
  date_of_birth: z.string(),
  notify_user: z.boolean(),
  tenant_user_hierarchy_unit_id: z.string()
});

export const UserUpdateParamsSchema = z.object({
  password: z.string().optional(),
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  gender: z.string().uuid().optional(),
  mobile: z.string().optional(),
  time_zone: z.string().optional(),
  language: z.string().optional(),
  job_title: z.string().optional(),
  primary_role: z.string().uuid().optional(),
  role: z.array(z.any()).optional(),
  date_of_birth: z.string().optional(),
  notify_user: z.boolean().optional(),
  tenant_user_hierarchy_unit_id: z.string().optional()
});

export const UserDeviceDtoSchema = z.object({
  platform: z.string(),
  push_token: z.string(),
  enabled: z.boolean().optional()
});

export const BaseActivityEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  subject: z.string(),
  end_date: z.string().datetime().optional(),
  start_date: z.string().datetime().optional(),
  description: z.string().optional()
});

export const BaseActivityCreateSchema = BaseActivityEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const BaseActivityUpdateSchema = BaseActivityEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const BaseCalendarEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  start_date: z.string().optional()
});

export const BaseCalendarCreateSchema = BaseCalendarEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const BaseCalendarUpdateSchema = BaseCalendarEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const BaseCityEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  country: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]),
  name: z.string(),
  latitude: z.string().optional(),
  longitude: z.string().optional(),
  flag: z.number().optional(),
  wikidataid: z.string().optional()
});

export const BaseCityCreateSchema = BaseCityEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const BaseCityUpdateSchema = BaseCityEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const BaseContactEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  name: z.string().optional(),
  mobile: z.string().optional(),
  job_title: z.string().optional(),
  email: z.string().email().optional(),
  organization: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional()
});

export const BaseContactCreateSchema = BaseContactEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const BaseContactUpdateSchema = BaseContactEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const BaseCountryEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  phone_code: z.string().optional(),
  currency_name: z.string().optional(),
  name: z.string(),
  original_name: z.string().optional(),
  language_codes: z.string().optional(),
  iso3: z.string().optional(),
  numeric_code: z.string().optional(),
  iso2: z.string().optional(),
  currency: z.string().optional(),
  currency_symbol: z.string().optional(),
  native: z.string().optional(),
  capital: z.string().optional(),
  region: z.string().optional(),
  subregion: z.string().optional(),
  nationality: z.string().optional(),
  timezones: z.string().optional(),
  translations: z.string().optional(),
  tld: z.string().optional(),
  emoji: z.string().optional(),
  emojiu: z.string().optional(),
  flag: z.number().optional(),
  wikidataid: z.string().optional(),
  latitude: z.string().optional(),
  longitude: z.string().optional()
});

export const BaseCountryCreateSchema = BaseCountryEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const BaseCountryUpdateSchema = BaseCountryEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const BaseDocymentEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  commontext: z.string().optional()
});

export const BaseDocymentCreateSchema = BaseDocymentEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const BaseDocymentUpdateSchema = BaseDocymentEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const BaseEventEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  calendar: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  event_notes: z.record(z.any()).optional()
});

export const BaseEventCreateSchema = BaseEventEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const BaseEventUpdateSchema = BaseEventEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const BaseMessageEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  subject: z.string(),
  input_token: z.number().optional(),
  original_input_token: z.number().optional(),
  ranker_token: z.number().optional(),
  tenant_view_id: z.string().optional(),
  body_json: z.record(z.any()).optional(),
  sent_at: z.string().datetime().optional(),
  direction: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  message_id: z.string().optional(),
  output_token: z.number().optional(),
  sender_phone: z.string().optional(),
  tenant_assistant_id: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  sender_name: z.string().optional(),
  files: z.record(z.any()).optional(),
  sender_email: z.string().email().optional(),
  message_source: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  sender_cc: z.string().optional(),
  sender_bcc: z.string().optional(),
  send_to_email: z.string().email().optional(),
  core_ai_model_id: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  tool_calls: z.record(z.any()).optional(),
  tenant_ai_connection_id: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  draft: z.boolean().optional(),
  message_type: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  thread: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  body_text: z.string().optional(),
  body: z.string().optional()
});

export const BaseMessageCreateSchema = BaseMessageEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const BaseMessageUpdateSchema = BaseMessageEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const BaseOrganizationEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  city: z.string().optional(),
  tax_area: z.string().optional(),
  website: z.string().optional(),
  phone: z.string().optional(),
  name: z.string(),
  tax_number: z.string().optional(),
  industry: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  commercial_title: z.string(),
  email: z.string().email().optional(),
  status: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  type: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  country: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  district: z.string().optional(),
  address: z.string().optional()
});

export const BaseOrganizationCreateSchema = BaseOrganizationEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const BaseOrganizationUpdateSchema = BaseOrganizationEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const BaseProjectEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  name: z.string(),
  followers: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.array(z.string().uuid())]).optional(),
  description: z.record(z.any()).optional(),
  image: z.record(z.any()).optional(),
  portfolio: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  status: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  progress: z.string().optional()
});

export const BaseProjectCreateSchema = BaseProjectEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const BaseProjectUpdateSchema = BaseProjectEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const BaseSectionsEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  project: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional()
});

export const BaseSectionsCreateSchema = BaseSectionsEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const BaseSectionsUpdateSchema = BaseSectionsEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const BaseStateEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  country_id: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()])
});

export const BaseStateCreateSchema = BaseStateEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const BaseStateUpdateSchema = BaseStateEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const BaseTaskEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  parent: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  status: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  task_notes: z.record(z.any()).optional(),
  conversation_channel: z.any().optional(),
  section: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  sort_order: z.number().optional(),
  project: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  followers: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.array(z.string().uuid())]).optional(),
  organization: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  feature: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional()
});

export const BaseTaskCreateSchema = BaseTaskEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const BaseTaskUpdateSchema = BaseTaskEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const BaseThreadEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  subject: z.string().optional(),
  sender_phone: z.string().optional(),
  request_type: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  incoming_channel: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  closed_on: z.string().datetime().optional(),
  color: z.string().optional(),
  parent_record_id: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  follow_up_on: z.string().datetime().optional(),
  sender_cc: z.string().optional(),
  followers: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.array(z.string().uuid())]).optional(),
  icon: z.string().optional(),
  sender_company: z.string().optional(),
  body: z.string().optional(),
  contact: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  sender_email: z.string().email().optional(),
  tenant_data_source_id: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  core_ai_assistant_id: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  reminder_message: z.string().optional(),
  starred: z.boolean().optional(),
  sender_bcc: z.string().optional(),
  notify_on: z.string().datetime().optional(),
  body_text: z.string().optional(),
  organization: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  priority: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  ai_generation_status: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  case_status: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  ai_generation_steps: z.record(z.any()).optional(),
  category: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  product: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  hold_reason: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  message_id: z.string().optional(),
  send_to_email: z.string().email().optional(),
  sender_name: z.string().optional()
});

export const BaseThreadCreateSchema = BaseThreadEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const BaseThreadUpdateSchema = BaseThreadEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const BaseTimeEntryEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  billing_status: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  contact_billed: z.string().optional(),
  duration: z.number(),
  time_and_material_report: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  record_owner_billed: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  duration_billable: z.number().optional(),
  description_billed: z.string().optional(),
  billable: z.boolean().optional(),
  duration_billed: z.number().optional(),
  date_billed: z.string().optional(),
  description: z.string(),
  task: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  issue: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  contact: z.string().optional(),
  date: z.string(),
  operation: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional()
});

export const BaseTimeEntryCreateSchema = BaseTimeEntryEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const BaseTimeEntryUpdateSchema = BaseTimeEntryEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CrmDealEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  name: z.string(),
  deal_value: z.number().optional(),
  expected_closing_date: z.string().optional(),
  follow_up_on: z.string().optional(),
  description: z.string().optional(),
  customer_type: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  expected_revenue: z.number().optional(),
  organization: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  hot_prospect: z.boolean().optional(),
  lead_source: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  contact_person: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  followers: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.array(z.string().uuid())]).optional(),
  stage: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  country: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional()
});

export const CrmDealCreateSchema = CrmDealEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CrmDealUpdateSchema = CrmDealEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CrmLeadEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  company_name: z.string().optional(),
  state: z.string().optional(),
  City: z.string().optional(),
  town: z.string().optional(),
  email: z.string().email().optional(),
  address: z.string().optional(),
  mobile: z.string().optional(),
  contact_message: z.string().optional(),
  contact_person: z.string().optional(),
  tenant_user_id: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  single_selection: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  q2_how_many_employee: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  what_is_your_role: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  what_is_your_general_practice_area: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  tenant: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  country: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  lead_source: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  lead_type: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  contact_consent: z.boolean().optional(),
  kvkk_consent: z.boolean().optional(),
  firstname: z.string(),
  lastname: z.string().optional(),
  how_can_we_help_you: z.string().optional(),
  q1_how_did_hear: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  form_schema_name: z.string().optional(),
  subject: z.string().optional(),
  company_website: z.string().optional(),
  role: z.string().optional(),
  product_name: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  related_product: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  lead_form: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  other_legal_software: z.string().optional(),
  how_did_you_hear_about_us: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  q3_what_manage_first_other: z.string().optional(),
  your_first_area_to_solve: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  q1_how_did_hear_other: z.string().optional(),
  im_already_using_legal_software: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  how_did_you_hear_about_us_other: z.string().optional(),
  visitor_info: z.record(z.any()).optional(),
  lead_status_: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  are_you_familiar_to_legal_software: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  q3_what_manage_first: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional()
});

export const CrmLeadCreateSchema = CrmLeadEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CrmLeadUpdateSchema = CrmLeadEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CrmNullEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  account_name: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional()
});

export const CrmNullCreateSchema = CrmNullEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CrmNullUpdateSchema = CrmNullEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const Custom2022-staff-salariesEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  kullanici_secimi_1: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  january: z.number().optional(),
  march_usd: z.number().optional(),
  september_usd: z.number().optional(),
  october_usd: z.number().optional(),
  november_usd: z.number().optional(),
  february: z.number().optional(),
  may: z.number().optional(),
  march: z.number().optional(),
  september: z.number().optional(),
  december_usd: z.number().optional(),
  november: z.number().optional(),
  total_try: z.number().optional(),
  april_usd: z.number().optional(),
  august_usd: z.number().optional(),
  january_usd: z.number().optional(),
  april: z.number().optional(),
  june: z.number().optional(),
  july: z.number().optional(),
  may_usd: z.number().optional(),
  august: z.number().optional(),
  february_usd: z.number().optional(),
  october: z.number().optional(),
  total_usd: z.number().optional(),
  december: z.number().optional()
});

export const CustomAgentEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  description: z.string().optional(),
  labels: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  source: z.string().optional()
});

export const CustomAgentCreateSchema = CustomAgentEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomAgentUpdateSchema = CustomAgentEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomAiCaseStudyEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  inspiration_link: z.string().optional(),
  screenshot: z.record(z.any()).optional(),
  tag: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  complexity_level: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional()
});

export const CustomAiCaseStudyCreateSchema = CustomAiCaseStudyEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomAiCaseStudyUpdateSchema = CustomAiCaseStudyEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomAssetsEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  serial_number: z.string(),
  mac_address: z.string().optional(),
  _of_assets: z.number(),
  confidentiality: z.number(),
  accessibility: z.number(),
  integrity: z.number(),
  cia_avg: z.number(),
  location: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]),
  department: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]),
  assigned_to: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  asset_owner: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]),
  reserve_owner: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]),
  asset_group: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]),
  asset_type: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]),
  status: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  confidentiality_level: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()])
});

export const CustomAssetsCreateSchema = CustomAssetsEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomAssetsUpdateSchema = CustomAssetsEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomCapaFollowupEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  autonumber_id_capa: z.number().optional()
});

export const CustomCapaFollowupCreateSchema = CustomCapaFollowupEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomCapaFollowupUpdateSchema = CustomCapaFollowupEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomCapaRequestEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  root_cause_analysis: z.string().optional(),
  action_taken: z.string().optional(),
  action_date: z.string().optional(),
  conclusion: z.string().optional(),
  ims_manager: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  request_type: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]),
  capa_status: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional()
});

export const CustomCapaRequestCreateSchema = CustomCapaRequestEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomCapaRequestUpdateSchema = CustomCapaRequestEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomDataProviderEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  link: z.string().optional(),
  labels: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional()
});

export const CustomDataProviderCreateSchema = CustomDataProviderEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomDataProviderUpdateSchema = CustomDataProviderEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomEdition-featuresEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  edition: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  feature: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional()
});

export const CustomFeatureEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  project: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  status: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  goal: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional()
});

export const CustomFeatureCreateSchema = CustomFeatureEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomFeatureUpdateSchema = CustomFeatureEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomFeatureTestEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  description: z.string().optional(),
  done: z.record(z.any()).optional(),
  beta: z.boolean().optional(),
  alpha: z.boolean().optional(),
  file: z.record(z.any()).optional(),
  task_list_panel: z.record(z.any()).optional(),
  labels: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  related_feature: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional()
});

export const CustomFeatureTestCreateSchema = CustomFeatureTestEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomFeatureTestUpdateSchema = CustomFeatureTestEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomFinancial-pageEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  toplam: z.number().optional(),
  haziran: z.number().optional(),
  temmuz: z.number().optional(),
  aralik: z.number().optional(),
  mart_usd: z.number().optional(),
  mart: z.number().optional(),
  ocak: z.number().optional(),
  agustos: z.number().optional(),
  eylul: z.number().optional(),
  ocak_usd: z.number().optional(),
  mayis: z.number().optional(),
  sayi_1: z.number().optional(),
  subat: z.number().optional(),
  nisan: z.number().optional(),
  sayi: z.number().optional(),
  sayi_2: z.number().optional(),
  ekim: z.number().optional(),
  kasim: z.number().optional(),
  subat_usd: z.number().optional(),
  sayi_3: z.number().optional(),
  nisan_usd: z.number().optional(),
  mayis_usd: z.number().optional(),
  haziran_usd: z.number().optional(),
  temmuz_usd: z.number().optional(),
  agustos_usd: z.number().optional(),
  eylul_usd: z.number().optional(),
  ekim_usd: z.number().optional(),
  kasim_usd: z.number().optional(),
  aralik_usd: z.number().optional(),
  harcama_kalemi: z.string().optional(),
  toplam_usd: z.number().optional(),
  kullanici_secimi: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional()
});

export const CustomFr6envanterEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  assignees: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  asset: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  security_class: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  confidentiality: z.number(),
  asset_class: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  custodian: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  department: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  availability: z.number(),
  cia_avg: z.number().optional(),
  integrity: z.number(),
  owner: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional()
});

export const CustomFr6envanterCreateSchema = CustomFr6envanterEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomFr6envanterUpdateSchema = CustomFr6envanterEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomGoalEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  due_date: z.string().optional(),
  start_date: z.string().optional(),
  status: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  category: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional()
});

export const CustomGoalCreateSchema = CustomGoalEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomGoalUpdateSchema = CustomGoalEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomIncome-and-spendingsEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  date: z.string().optional(),
  reference: z.string().optional(),
  type: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  spent: z.number().optional(),
  descriptions: z.string().optional(),
  kisa_metin: z.string().optional(),
  received: z.number().optional()
});

export const CustomIssueEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  name: z.string(),
  description: z.record(z.any()).optional(),
  closed_on: z.string().optional(),
  infected: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  commonimage: z.record(z.any()).optional(),
  assigned: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  priority: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  status: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  project: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional()
});

export const CustomIssueCreateSchema = CustomIssueEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomIssueUpdateSchema = CustomIssueEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomJobapplicationEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  name: z.string(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  date: z.string().optional()
});

export const CustomJobapplicationCreateSchema = CustomJobapplicationEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomJobapplicationUpdateSchema = CustomJobapplicationEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomMarkettingIssueEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  closed_on: z.string().optional(),
  assigned: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  image: z.record(z.any()).optional(),
  status: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  priority: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional()
});

export const CustomMarkettingIssueCreateSchema = CustomMarkettingIssueEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomMarkettingIssueUpdateSchema = CustomMarkettingIssueEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomMcpListsEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  phone: z.string().optional(),
  tools: z.record(z.any()).optional(),
  url: z.string().optional(),
  provider: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  category: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional()
});

export const CustomMcpListsCreateSchema = CustomMcpListsEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomMcpListsUpdateSchema = CustomMcpListsEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomOnboardingPlanEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  attachments: z.record(z.any()).optional(),
  contact_for_onboarding: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  date: z.string().optional(),
  status: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  user: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  description: z.string().optional(),
  organization_name: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional()
});

export const CustomOnboardingPlanCreateSchema = CustomOnboardingPlanEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomOnboardingPlanUpdateSchema = CustomOnboardingPlanEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomPersonnelEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  shorthand: z.string().optional()
});

export const CustomPersonnelCreateSchema = CustomPersonnelEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomPersonnelUpdateSchema = CustomPersonnelEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomPricing-featuresEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  description: z.string().optional(),
  category: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional()
});

export const CustomProductEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  product_category: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  text: z.string().optional(),
  checked: z.boolean().optional(),
  usage_unit: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  unit_price: z.number().optional(),
  taxable: z.boolean().optional(),
  purchase_price: z.number().optional(),
  max_discount: z.number().optional(),
  stripe_id: z.string().optional(),
  description: z.string().optional(),
  product_image: z.record(z.any()).optional(),
  product_name_tr: z.string().optional(),
  product_name_rnd_tr: z.string().optional(),
  vat: z.number().optional(),
  brand: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  number: z.number().optional()
});

export const CustomProductCreateSchema = CustomProductEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomProductUpdateSchema = CustomProductEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomProductFeatureEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  revenue: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  team_effort: z.number().optional(),
  end_date: z.string().optional(),
  start_date: z.string().optional(),
  status: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  stage: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  category: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  label: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  webpage: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  release: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  product: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()])
});

export const CustomProductFeatureCreateSchema = CustomProductFeatureEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomProductFeatureUpdateSchema = CustomProductFeatureEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomProductValueScoringEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  development_stage: z.number().optional(),
  product: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]),
  niche: z.boolean().optional(),
  must_to_have: z.boolean().optional(),
  compliance_required: z.boolean().optional(),
  in_house_expertise: z.boolean().optional(),
  technical_complexity: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  time_to_market: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  existing_channels: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  customer_acquisition_cost: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  ease_of_use: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  enterprise_business: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional()
});

export const CustomProductValueScoringCreateSchema = CustomProductValueScoringEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomProductValueScoringUpdateSchema = CustomProductValueScoringEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomPromptsEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  content: z.any().optional()
});

export const CustomPromptsCreateSchema = CustomPromptsEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomPromptsUpdateSchema = CustomPromptsEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomProviderDevelopmentItemEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  auth_type: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  oauth2_credentials: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  auth_endpoint: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  token_endpoint: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  exchange_token: z.boolean().optional(),
  tenant___subaccounts: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  base_url: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  ds_error_transformer: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  ds_pagination_settings: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  parent_ds: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  namespace: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  ds_method: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  ac_batch_conf: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  ac_customize: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  ac_response_fields: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  w_creation_method: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  problem_note: z.string().optional(),
  api_type: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  links: z.record(z.any()).optional(),
  dynamic_datasource: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  issues_ticket: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  category: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  priority: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  status: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  provider_settings: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  detailed_comment: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  note: z.string().optional(),
  datasources: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  actions: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  webhooks: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional()
});

export const CustomProviderDevelopmentItemCreateSchema = CustomProviderDevelopmentItemEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomProviderDevelopmentItemUpdateSchema = CustomProviderDevelopmentItemEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomReleasePlanEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  product: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional()
});

export const CustomReleasePlanCreateSchema = CustomReleasePlanEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomReleasePlanUpdateSchema = CustomReleasePlanEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomSaasAppEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  website: z.string().optional(),
  source: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  labels: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional()
});

export const CustomSaasAppCreateSchema = CustomSaasAppEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomSaasAppUpdateSchema = CustomSaasAppEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomTenantEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  completed_working_date: z.string().optional(),
  estimated_working_hours: z.string().optional(),
  pricing_plan: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  relation_link: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  cs: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.string().uuid()]).optional(),
  publication_date: z.string().optional(),
  date_of_attendance: z.string().optional(),
  contract: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  live: z.boolean().optional(),
  tenant_no: z.number().optional()
});

export const CustomTenantCreateSchema = CustomTenantEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomTenantUpdateSchema = CustomTenantEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomVdf-roadmapEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  not: z.string().optional()
});

export const CustomWebFormEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  name: z.string(),
  email: z.string().email().optional()
});

export const CustomWebFormCreateSchema = CustomWebFormEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomWebFormUpdateSchema = CustomWebFormEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});

export const CustomNullEntitySchema = z.object({
  id: z.string().uuid().optional(),
  record_owner: z.string().uuid().optional(),
  created_on: z.string().datetime().optional(),
  created_by: z.string().uuid().optional(),
  last_modified_on: z.string().datetime().optional(),
  last_modified_by: z.string().uuid().optional(),
  serial_imei_no: z.string().optional(),
  model: z.string().optional(),
  mac_adress: z.string().optional(),
  asset_id: z.number().optional(),
  asset_type: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional(),
  brand_station: z.union([z.object({ id: z.string().uuid(), name: z.string() }), z.any()]).optional()
});

export const CustomNullCreateSchema = CustomNullEntitySchema.omit({ 
  id: true, 
  created_on: true, 
  created_by: true, 
  last_modified_on: true, 
  last_modified_by: true
});
export const CustomNullUpdateSchema = CustomNullEntitySchema.partial().omit({
  id: true,
  created_on: true,
  created_by: true,
  last_modified_on: true,
  last_modified_by: true
});
