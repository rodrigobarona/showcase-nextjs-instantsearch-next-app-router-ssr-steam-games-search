## BusinessType (string)

- Business type options
  - Allowed values: "sale", "lease"

## County (object)

- County item
  - id (string)
  - name (string)

## DevelopmentName (object)

- Minimal info about a development.
  - id (string)
  - title (string)
  - slug_url (string)

## Feature (string)

- Feature options
  - Allowed values: "pool", "garden", "garage", "terrace", "elevator", "condominium", "gymnasium", "sea-view", "golf", "beach", "air-conditioning", "duplex"

## HTTPValidationError (object)

- detail (array<object>)
  - Items (object)
    - loc (array<(string | integer)>)
      - Items (string | integer)
        - Any of: string, integer
        - #0: string
        - #1: integer
    - msg (string)
    - type (string)

## Language (string)

- Language options
  - Allowed values: "pt", "en", "fr"

## Lead (object)

- Lead input
  - name (string)
  - dialcode (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - phone (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - email (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - message (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - description (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - product_id (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - utm_campaign (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - utm_medium (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - utm_source (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - subscribe_newsletter (boolean | null)
    - Any of: boolean, null
      - #0: boolean
      - #1: null
  - business_type (string | null)
    - Any of: string, null
      - #0: BusinessType
      - #1: null
  - gclid (string | null)
    - Any of: string, null
      - #0: string
      - #1: null

## Photo (object)

- Photo data
  - url (string)
  - main_photo (boolean)
  - sequence (integer)

## Product (object)

- Full product details
  - id (string)
  - price (integer | null)
    - Any of: integer, null
      - #0: integer ≥ 0
      - #1: null
    - Default: 0
  - price_on_application (boolean | null)
    - Any of: boolean, null
      - #0: boolean
      - #1: null
    - Default: false
  - rooms (integer | null)
    - Any of: integer, null
      - #0: integer ≥ 0
      - #1: null
    - Default: 0
  - title (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
    - Default: ""
  - bathrooms (integer | null)
    - Any of: integer, null
      - #0: integer ≥ 0
      - #1: null
  - outdoor_area (number | null)
    - Any of: number, null
      - #0: number
      - #1: null
  - land_area (number | null)
    - Any of: number, null
      - #0: number
      - #1: null
  - gross_build_area (number | null)
    - Any of: number, null
      - #0: number
      - #1: null
  - gross_private_area (number | null)
    - Any of: number, null
      - #0: number
      - #1: null
  - parent_property_id (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - parking_spaces (integer | null)
    - Any of: integer, null
      - #0: integer ≥ 0
      - #1: null
    - Default: 0
  - category_id (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - business_type_id (string | null)
    - Any of: string, null
      - #0: BusinessType
      - #1: null
  - slug_url (string)
  - code (string)
  - plan_url (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - availability_ids (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - category_name (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - sub_category_id (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - sub_category_name (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - cover_photo (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - description (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - county_id (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - county (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - zone_id (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - zone (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - parish_id (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - parish (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - photos (array<object>)
    - Items (object)
      - url (string)
      - main_photo (boolean)
      - sequence (integer)
    - Default: []
  - fraction (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - latitude (number | null)
    - Any of: number, null
      - #0: number
      - #1: null
  - longitude (number | null)
    - Any of: number, null
      - #0: number
      - #1: null
  - postal_code (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - address (string | null)
    - Any of: string, null
      - #0: string
      - #1: null

## ProductSearch (object)

- Search parameters
  - order_by (string | null)
    - Any of: string, null
      - #0: Allowed values: "relevance-desc", "price-desc", "price-asc", "date-desc"
      - #1: null
    - Default: "relevance-desc"
  - page (integer | null)
    - Any of: integer, null
      - #0: integer > 0
      - #1: null
    - Default: 1
  - limit (integer | null)
    - Any of: integer, null
      - #0: integer > 0
      - #1: null
  - ids (array<string>)
    - Items: string
    - Default: []
  - codes (array<string>)
    - Items: string
    - Default: []
  - rooms (array<(integer | string)>)
    - Items: (integer | string)
      - Any of: integer, string
        - #0: integer ≥ 0
        - #1: string
    - Default: []
  - price_min (integer | null)
    - Any of: integer, null
      - #0: integer ≥ 0
      - #1: null
  - price_max (integer | null)
    - Any of: integer, null
      - #0: integer ≥ 0
      - #1: null
  - categories (array<string>)
    - Items: string
    - Default: []
  - counties (array<string>)
    - Items: string
    - Default: []
  - zones (array<string>)
    - Items: string
    - Default: []
  - business_type (string | null)
    - Any of: string, null
      - #0: BusinessType
        - Business type options
          - Allowed values: "sale", "lease"
      - #1: null
  - states (array<string>)
    - Items: string
      - Options for the state of the property
        - Allowed values: "new", "used", "remodelled", "under-construction"
    - Default: []
  - area_min (integer | null)
    - Any of: integer, null
      - #0: integer ≥ 0
      - #1: null
  - area_max (integer | null)
    - Any of: integer, null
      - #0: integer ≥ 0
      - #1: null
  - bathrooms (array<(integer | string)>)
    - Items: (integer | string)
      - Any of: integer, string
        - #0: integer ≥ 0
        - #1: string
    - Default: []
  - required_features (array<string>)
    - Items: string
      - Feature options
        - Allowed values: "pool", "garden", "garage", "terrace", "elevator", "condominium", "gymnasium", "sea-view", "golf", "beach", "air-conditioning", "duplex"
    - Default: []
  - optional_features (array<array<string>>)
    - Items: array<string>
      - Items: string
        - Feature options
          - Allowed values: "pool", "garden", "garage", "terrace", "elevator", "condominium", "gymnasium", "sea-view", "golf", "beach", "air-conditioning", "duplex"
    - Default: []
  - group_development_units (boolean)
    - Default: false

## ProductSummary (object)

- Product summary
  - id (string)
  - price (integer | null)
    - Any of: integer, null
      - #0: integer ≥ 0
      - #1: null
    - Default: 0
  - price_on_application (boolean | null)
    - Any of: boolean, null
      - #0: boolean
      - #1: null
    - Default: false
  - rooms (integer | null)
    - Any of: integer, null
      - #0: integer ≥ 0
      - #1: null
    - Default: 0
  - title (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
    - Default: ""
  - bathrooms (integer | null)
    - Any of: integer, null
      - #0: integer ≥ 0
      - #1: null
  - outdoor_area (number | null)
    - Any of: number, null
      - #0: number
      - #1: null
  - land_area (number | null)
    - Any of: number, null
      - #0: number
      - #1: null
  - gross_build_area (number | null)
    - Any of: number, null
      - #0: number
      - #1: null
  - gross_private_area (number | null)
    - Any of: number, null
      - #0: number
      - #1: null
  - parent_property_id (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - parking_spaces (integer | null)
    - Any of: integer, null
      - #0: integer ≥ 0
      - #1: null
    - Default: 0
  - category_id (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - business_type_id (string | null)
    - Any of: string, null
      - #0: BusinessType
      - #1: null
  - slug_url (string)
  - code (string)
  - plan_url (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - availability_ids (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - category_name (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - sub_category_id (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - sub_category_name (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - cover_photo (string | null)
    - Any of: string, null
      - #0: string
      - #1: null
  - fraction (string | null)
    - Any of: string, null
      - #0: string
      - #1: null

## Response[List[County]] object

- data (array<object> | null)
  - Any of: array<object>, null
    - #0: array<object>
      - Items: County item
        - id (string)
        - name (string)
    - #1: null
  - metadata (object)
    - Default: {}

## Response[List[DevelopmentName]] object

- data (array<object> | null)
  - Any of: array<object>, null
    - #0: array<object>
      - Items: Minimal info about a development
    - #1: null
  - metadata (object)
    - Default: {}

## Response[List[Product]] object

- data (array<object> | null)
  - Any of: array<object>, null
    - #0: array<object>
      - Items: Full product details
    - #1: null
- metadata (object)
  - Default: {}

## Response[List[Zone]] object

- data (array<object> | null)
  - Any of: array<object>, null
    - #0: array<object>
      - Items: Zone item
        - id (string)
        - name (string)
    - #1: null
  - metadata (object)
    - Default: {}

## Response[ProductSummary] object

- data (object | null)
  - Any of: object, null
    - #0: ProductSummary <object>
    - #1: null
  - metadata (object)
    - Default: {}

## Response[Product] object

- data (object | null)
  - Any of: object, null
    - #0: Product ob<object>ject
    - #1: null
  - metadata (object)
    - Default: {}

## State (string)

- Options for the state of the property
  - Allowed values: "new", "used", "remodelled", "under-construction"

## ValidationError (object)

- loc (array<(string | integer)>)
  - Items (string | integer)
    - Any of: string, integer
      - #0: string
      - #1: integer
- msg (string)
- type (string)

## Zone (object)

- Zone item
  - id (string)
  - name (string)
  - county_id (string)

# TYPESENSE SEARCH QUERY SCHEMA

{
"created_at": 1734639008,
"default_sorting_field": "price",
"enable_nested_fields": true,
"fields": [
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "code",
"optional": false,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "price",
"optional": false,
"sort": true,
"stem": false,
"store": true,
"type": "float"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "price_on_application",
"optional": false,
"sort": true,
"stem": false,
"store": true,
"type": "bool"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "title",
"optional": false,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "description",
"optional": false,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "category_name",
"optional": false,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "slug_url",
"optional": false,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "last_updated",
"optional": false,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "rooms",
"optional": false,
"sort": true,
"stem": false,
"store": true,
"type": "int32"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "category_id",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "bathrooms",
"optional": true,
"sort": true,
"stem": false,
"store": true,
"type": "int32"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "outdoor_area",
"optional": true,
"sort": true,
"stem": false,
"store": true,
"type": "float"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "land_area",
"optional": true,
"sort": true,
"stem": false,
"store": true,
"type": "float"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "gross_build_area",
"optional": true,
"sort": true,
"stem": false,
"store": true,
"type": "float"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "gross_private_area",
"optional": true,
"sort": true,
"stem": false,
"store": true,
"type": "float"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "parent_property_id",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "parking_spaces",
"optional": true,
"sort": true,
"stem": false,
"store": true,
"type": "int32"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "business_type_id",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "plan_url",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "availability_ids",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "sub_category_id",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "sub_category_name",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "cover_photo",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "equipments",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string[]"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "surroundings",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string[]"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "county_id",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "county",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "zone_id",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "zone",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "parish_id",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "parish",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "latitude",
"optional": true,
"sort": true,
"stem": false,
"store": true,
"type": "float"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "longitude",
"optional": true,
"sort": true,
"stem": false,
"store": true,
"type": "float"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "postal_code",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "address",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "fraction",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "photos",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "object[]"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "languages",
"optional": false,
"sort": false,
"stem": false,
"store": true,
"type": "string[]"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "title_en",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "title_fr",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "description_en",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "description_fr",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "category_name_en",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": true,
"index": true,
"infix": false,
"locale": "",
"name": "category_name_fr",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "slug_url_en",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "slug_url_fr",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "equipments_en",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string[]"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "equipments_fr",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string[]"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "surroundings_en",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string[]"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "surroundings_fr",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string[]"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "published_at",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "updated_at",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "state",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "previous_price",
"optional": true,
"sort": true,
"stem": false,
"store": true,
"type": "float"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "is_exclusive",
"optional": true,
"sort": true,
"stem": false,
"store": true,
"type": "bool"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "photos.url",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "string[]"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "photos.sequence",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "int64[]"
},
{
"facet": false,
"index": true,
"infix": false,
"locale": "",
"name": "photos.main_photo",
"optional": true,
"sort": false,
"stem": false,
"store": true,
"type": "bool[]"
}
],
"name": "properties_1734639007644",
"num_documents": 2837,
"symbols_to_index": [],
"token_separators": []
}

# TYPESENS REULTS

{
"address": "ZEN - Rua Azinhaga do Poço de Baixo, piso 2, (A202)",
"availability_ids": "reservado-visivel-no-site",
"bathrooms": 1,
"business_type_id": "sale",
"category_id": "apartment",
"category_name": "Apartamento",
"category_name_en": "Apartment",
"category_name_fr": "Appartement",
"code": "PF33983",
"county": "Lisboa",
"county_id": "lisboa",
"cover_photo": "https://static.portadafrente.com/PF28153/Tipo_P3_1655905859730.jpg",
"description": "Situado entre dois icónicos bairros de Lisboa, Telheiras e Lumiar, o empreendimento Zen vem trazer uma nova vida a esta localização com um projeto de habitação premium, onde o bem-estar é a palavra de ordem. O projeto é composto por apartamentos T1 a T4 com varandas e terraços, com áreas entre os 52 e 141 m2, estacionamento e arrecadações. Cada unidade foi pensada em detalhe para oferecer o máximo conforto e tranquilidade aos seus residentes, numa conversa perfeita entre funcionalidade e qualidade. Áreas amplas interiores coabitam com espaços exteriores convidativos. O condomínio privado com jardins comuns e também privativos, valências como piscina, ginásio, espaços infantis, estação de pets, salas de convívio comuns e também espaço para bicicletas. Num raio de 1km é possível ter acesso a todo o tipo de serviços, como escolas, hospitais, supermercados, transportes públicos e metro. Existem também jardins próximos e facilidade de auto-estradas com ligação aos vários pontos do país.",
"description_en": "Located between two iconic districts of Lisbon, Telheiras and Lumiar, the Zen development brings new life to this location with a premium housing project, where well-being is the keyword.\r\n\r\nThe project consists of T1 to T4 apartments with balconies and terraces, with areas between 52 and 141 sqm, parking and storage. Each unit was designed in detail to offer maximum comfort and tranquility to its residents, in a perfect conversation between functionality and quality. Large interior areas cohabit with inviting outdoor spaces.\r\n\r\nThe private condominium with common and also private gardens, amenities such as swimming pool, gym, children's areas, pet station, common living rooms and also space for bicycles.\r\n\r\nWithin a radius of 1km it is possible to have access to all kinds of services, such as schools, hospitals, supermarkets, public transport and metro. There are also gardens nearby and the possibility of highways connecting to various parts of the country.",
"description_fr": "Situé entre deux quartiers ironiques de Lisbonne, Telheiras et Lumiar, le développement Zen redonne vie à cet endroit avec un projet de logements premium, où le bien-être est le mot d'ordre.\r\n\r\nLe projet se compose d'appartements 2 à 5 pièces avec balcons et terrasses, avec des surfaces entre 52 et 141 m2, parking et débarras. Chaque unité a été conçue dans les moindres détails pour offrir un maximum de confort et de tranquillité à ses résidents, dans une parfaite conversation entre fonctionnalité et qualité. De grands espaces intérieurs cohabitent avec des espaces extérieurs invitants.\r\n\r\nLa copropriété privée avec des jardins communs et privés, des installations telles que piscine, salle de sport, aires de jeux pour enfants, station pour animaux de compagnie, salons communs et espace pour les vélos.\r\n\r\nDans un rayon de 1 km, il est possible d'avoir accès à toutes sortes de services, tels que les écoles, les hôpitaux, les supermarchés, les transports en commun et le métro. Il y a aussi des jardins à proximité et la possibilité d'autoroutes reliant différentes parties du pays.",
"equipments": [
"Ar Condicionado",
"Banheira",
"Domótica",
"Elevador",
"Estores Electricos",
"Exaustor",
"Fogão",
"Forno",
"Frigorífico",
"Garagem",
"Ginásio",
"Isolamento Acústico",
"Isolamento Térmico",
"Jardim",
"Máquina de Lavar Louça",
"Máquina de Lavar Roupa",
"Parque infantil",
"Painéis fotovoltaicos",
"Piscina",
"Placa Vitrocerâmica",
"Poliban",
"Porta Alta Segurança",
"Pré-instalação ar condicionado",
"Pré-instalação painéis solares",
"Roupeiros",
"Painéis Solares",
"Video Porteiro",
"Vidros Duplos",
"Microondas",
"Carregamento Veículos Eléctricos",
"Sala de Condomínio"
],
"equipments_en": [
"Air Conditioning",
"Bathtub",
"Home automation",
"Elevator",
"Electric blinds",
"Exhaust",
"Stove",
"Oven",
"Fridge",
"Garage",
"Gym",
"Acoustic Insulation",
"Thermal Insulation",
"Garden",
"Dishwasher",
"Washing Machine",
"Playground",
"Photovoltaic panels",
"Swimming Pool",
"Vitroceramic Cooktop",
"Shower",
"High Security Door",
"Pre-installation for air conditioning",
"Pre-installation for solar panels",
"Wardrobes",
"Solar panels",
"Video Doorman",
"Double Glazed",
"Microwave Oven",
"EV charging station",
"Condominium Room"
],
"equipments_fr": [
"Climatisation",
"Baignoire",
"Automatisation de la maison",
"Ascenseur",
"Stores électriques",
"Échappement",
"Le fourneau",
"Four",
"Frigo",
"Garage",
"Gym",
"Isolation sonore",
"Isolation thermique",
"Jardin",
"Lave-vaisselle",
"Machine à laver",
"Terrain de jeux",
"Panneaux photovoltaïques",
"Piscine",
"Table de cuisson vitrocéramique",
"Douche",
"Porte haute sécurité",
"Pré-installation pour la climatisation",
"Pré-installation pour panneaux solaires",
"Armoires",
"Panneaux solaires",
"Portier vidéo",
"Double vitrage",
"Micro-ondes",
"Borne de recharge pour voitures électriques",
"Salle de condominium"
],
"floor": 2,
"fraction": "A202",
"gross_private_area": 52.5,
"id": "a0cTg0000024VnFIAU",
"is_exclusive": true,
"land_area": 0,
"languages": [
"pt"
],
"last_updated": "2024-12-19T20:14:07.794Z",
"latitude": 38.7733519,
"longitude": -9.1716325,
"outdoor_area": 13.4,
"parent_property_id": "a0c3Y00000VNmxXQAT",
"parish": "Lumiar",
"parish_id": "lisboa-lumiar",
"parking_spaces": 1,
"photos": [
{
"main_photo": true,
"sequence": 1,
"url": "https://static.portadafrente.com/PF28153/Tipo_P3_1655905859730.jpg"
},
{
"main_photo": false,
"sequence": 2,
"url": "https://static.portadafrente.com/PF28153/Suite%20C8_1655905859728.jpg"
},
{
"main_photo": false,
"sequence": 3,
"url": "https://static.portadafrente.com/PF28153/I.S.C9_1655905859726.jpg"
},
{
"main_photo": false,
"sequence": 4,
"url": "https://static.portadafrente.com/PF28153/CAM%20EXT%20patio%20B_0.02_1655905859734.jpg"
},
{
"main_photo": false,
"sequence": 5,
"url": "https://static.portadafrente.com/PF28153/CAM%20EXT%20A%20recept_0.02_1655905859731.jpg"
},
{
"main_photo": false,
"sequence": 6,
"url": "https://static.portadafrente.com/PF28153/GYM%20Cam%20A_1.01_1655905859724.jpg"
},
{
"main_photo": false,
"sequence": 7,
"url": "https://static.portadafrente.com/PF28153/CAM%20EXT%20G_0.01_corte_1655905859733.jpg"
},
{
"main_photo": false,
"sequence": 8,
"url": "https://static.portadafrente.com/PF28153/CAM%20EXT%20G_0.01_1655905859732.jpg"
},
{
"main_photo": false,
"sequence": 9,
"url": "https://static.portadafrente.com/PF28153/CAM+EXT+patio+A_0.01_1655905859734.jpg"
},
{
"main_photo": false,
"sequence": 10,
"url": "https://static.portadafrente.com/PF28153/Cam+X+_5.01_1655905859735.jpg"
},
{
"main_photo": false,
"sequence": 11,
"url": "https://static.portadafrente.com/PF28153/Recept%20Cam%20A_9.00_1655906633424.jpg"
}
],
"plan_url": "https://portadafrente.my.salesforce.com/sfc/p/1t000000D6v6/a/Tg000000ISfN/1fdAvbhBLQVOLeD0CUyHgxJycjozX8sVq0I9ImJJ.Mw",
"postal_code": "1600-580",
"price": 390000,
"price_on_application": false,
"rooms": 1,
"slug_url": "apartamento-t1-lisboa-venda-a0cTg0000024VnFIAU",
"slug_url_en": "1-bedroom-apartment-lisboa-sale-a0cTg0000024VnFIAU",
"slug_url_fr": "appartement-2-pieces-lisboa-vente-a0cTg0000024VnFIAU",
"state_id": "under-construction",
"surroundings": [
"Aeroporto",
"Áreas de Lazer Infantil",
"Auto-Estrada",
"Banco",
"Campo de Golfe",
"Centro Comercial",
"Condomínio Fechado",
"Escola",
"Espaços Verdes",
"Estação Rodoviária",
"Farmácia",
"Ginásio",
"Hipermercado",
"Hospital",
"Mercado",
"Polícia",
"Posto de Combustível",
"Transportes Públicos",
"Vista para Jardim",
"Estacionamento"
],
"surroundings_en": [
"Airport",
"Children's play areas",
"Freeway",
"Bank",
"Golf course",
"Shopping center",
"Closed condominium",
"School",
"Green spaces",
"Railway station",
"Pharmacy",
"Gym",
"Hypermarket",
"Hospital",
"Mart",
"Police",
"Gas station",
"Public Transportation",
"Garden View",
"Parking"
],
"surroundings_fr": [
"Aéroport",
"Aires de jeux pour enfants",
"Autoroute",
"Banque",
"Terrain de golf",
"Centre commercial",
"Copropriété fermée",
"École",
"Espaces verts",
"Gare",
"Pharmacie",
"Gym",
"grande surface",
"Hôpital",
"Marché",
"Police",
"Station-essence",
"Transport public",
"Vue du jardin",
"Parking"
],
"title": "Apartamento T1, Lisboa",
"title_en": "1 Bedroom Apartment, Lisboa",
"title_fr": "Appartement 2 pièces, Lisboa",
"zone": "Telheiras",
"zone_id": "lisboa-telheiras"
}
{
"document": {
"address": "Élou Jardins | Rua Amadeo de Souza-Cardoso",
"availability_ids": "reservado-visivel-no-site",
"bathrooms": 2,
"business_type_id": "sale",
"category_id": "apartment",
"category_name": "Apartamento",
"category_name_en": "Apartment",
"category_name_fr": "Appartement",
"code": "PF35338",
"county": "Loures",
"county_id": "loures",
"cover_photo": "https://static.portadafrente.com/PF35335/ELOU_Still_01_Sala_1731597271677.jpg",
"description": "O ÉLOU Jardins é um sonho para quem adora viver a cidade, mas não prescinde do sossego de uma casa às portas de Lisboa. Localizado em Santo António dos Cavaleiros, em Loures, fica a poucos minutos da capital, com acessos rodoviários, transportes públicos, metro, escolas, ginásios, serviços de saúde, e comércio. • Interiores Amplos e Agradáveis Varandas • Cozinha Equipada • Piscina • Ginásio • Sala Multiusos • Lobby Decorado • Zonas Verdes e de Lazer • Bons Acessos ao Centro da Cidade • Estacionamento Privativo • Sustentabilidade e Eficiência Energética • Mobilidade Elétrica Com acesso direto ao centro de Lisboa e qualquer parte do país, através da proximidade às autoestradas A1 e A8 (Lisboa-Porto), A9 e A16 (Oeste), o ÉLOU Jardins fica também a menos de 10 km do aeroporto e da ponte Vasco da Gama. Conta igualmente com uma rede de transportes públicos, que inclui autocarros e metro, potenciando uma vida mais amiga do ambiente. A nova paragem de metro “Torres da Bela Vista”, que fará ligação direta a Odivelas e qualquer ponto da capital, ficará a poucos minutos a pé do condomínio. • 18 minutos | De carro até ao centro de lisboa. • 10 minutos | De carro até ao aeroporto e à Ponte Vasco da Gama. Com projeto desenvolvido e desenhado pela equipa liderada pela Arquiteta Cristina Rocheta, da SOLYD Property Developers este novo condomínio fechado conta com apartamentos, de tipologias T1 a T4, com áreas compreendidas entre os 81 e os 239m2 e varandas e terraços com áreas até aos 89 m2, o ÉLOU Jardins oferece modernos apartamentos com excelentes acabamentos. Com estacionamento subterrâneo privativo, que se encontram num ponto comum - a vasta zona de lazer privativa. Neste espaço exterior, com relvados e uma piscina, o descanso e a tranquilidade são os grandes anfitriões, convidando-o a desfrutar com a família e os amigos. Para além disso, o projeto oferece lobby decorado, ginásio totalmente equipado e sala multiusos dos quais pode desfrutar nos seus tempos livres. Os elevados padrões de qualidade estendem-se aos revestimentos de parede, carpintarias lacadas, porta de alta segurança, pavimentos, ar condicionado com alta eficiência energética e roupeiros embutidos. As cozinhas são totalmente equipadas com eletrodomésticos de topo e móveis de grande capacidade de arrumação. Já as casas de banho incluem louças e torneiras de marcas de referência. Este projeto tem na sua génese a sustentabilidade e, por isso, a diminuição do impacto ambiental é uma prioridade. No ÉLOU Jardins garantimos que cada escolha respeita também o equilíbrio do planeta, promovendo a eficiência energética e optando por materiais sustentáveis e recicláveis. A Porta da Frente Christie’s é uma empresa de mediação imobiliária que trabalha no mercado há mais de duas décadas, focando-se nos melhores imóveis e empreendimentos, quer para venda quer para arrendamento. A empresa foi selecionada pela prestigiada marca Christie’s International Real Estate para representar Portugal, nas zonas de Lisboa, Cascais, Oeiras e Alentejo. A principal missão da Porta da Frente Christie’s é privilegiar um serviço de excelência a todos os nossos clientes.",
"description_en": "ÉLOU Jardins is a dream for those who love living in the city but can't do without the peace and quiet of a house on Lisbon's doorstep. Located in Santo António dos Cavaleiros, in Loures, it's just a few minutes from the capital, with easy access to roads, public transport, the metro, schools, gyms, health services and shops.\r\n\r\n- Spacious interiors and pleasant balconies\r\n- Equipped kitchen\r\n- Swimming pool\r\n- Gym\r\n- Multipurpose Room\r\n- Decorated Lobby\r\n- Green and leisure areas\r\n- Good access to the city center\r\n- Private parking\r\n- Sustainability and Energy Efficiency\r\n- Electric Mobility\r\n\r\nWith direct access to the center of Lisbon and anywhere in the country, due to its proximity to the A1 and A8 (Lisbon-Oporto), A9 and A16 (West) highways, ÉLOU Jardins is also less than 10 km from the airport and the Vasco da Gama bridge.\r\n\r\nIt also has a public transport network, including buses and the metro, making life more environmentally friendly. The new \"Torres da Bela Vista\" metro stop, which connects directly to Odivelas and anywhere in the capital, is just a few minutes' walk from the condominium.\r\n\r\n- 18 minutes | by car to the center of Lisbon.\r\n- 10 minutes | by car to the airport and the Vasco da Gama Bridge.\r\n\r\nWith a project developed and designed by the team led by architect Cristina Rocheta, from SOLYD Property Developers, this new gated community has apartments of types T1 to T4, with areas between 81 and 239 m2 and balconies and terraces with areas up to 89 m2, ÉLOU Jardins offers modern apartments with excellent finishes.\r\n\r\nWith private underground parking, they meet at a common point - the vast private leisure area. In this outdoor space, with lawns and a swimming pool, relaxation and tranquillity are the great hosts, inviting you to enjoy it with family and friends. In addition, the project offers a decorated lobby, a fully equipped gym and a multipurpose room which you can enjoy in your free time.\r\n\r\nThe high quality standards extend to the wall coverings, lacquered carpentry, high-security doors, flooring, energy-efficient air conditioning and built-in closets.\r\nThe kitchens are fully equipped with top-of-the-range appliances and plenty of storage space. The bathrooms, on the other hand, feature top brand vitreous china and taps.\r\n\r\nThis project has sustainability at its core, which is why reducing environmental impact is a priority. At ÉLOU Jardins we ensure that every choice also respects the balance of the planet, promoting energy efficiency and opting for sustainable and recyclable materials.\r\n\r\nPorta da Frente Christie’s is a real estate agency that has been operating in the market for more than two decades. Its focus lays on the highest quality houses and developments, not only in the selling market, but also in the renting market. The company was elected by the prestigious brand Christie’s International Real Estate to represent Portugal in the areas of Lisbon, Cascais, Oeiras and Alentejo. The main purpose of Porta da Frente Christie’s is to offer a top-notch service to our customers.",
"description_fr": "ÉLOU Jardins est un rêve pour ceux qui aiment vivre en ville, mais ne peuvent se passer du calme et de la tranquillité d'un logement aux portes de Lisbonne. Situé à Santo António dos Cavaleiros, à Loures, il se trouve à quelques minutes de la capitale, desservi par un réseau routier, des transports en commun, dont le métro, ainsi que des établissements d’enseignement, des clubs de sport, des services de santé et des commerces.\r\n\r\nCaractéristiques: \r\n• Balcons intérieurs spacieux et agréables\r\n• Cuisine équipée\r\n• Piscine\r\n• Salle de sport\r\n• Salle polyvalente\r\n• Hall décoré\r\n• Espaces verts et de loisirs\r\n• Bon accès au centre-ville\r\n• Parking privé\r\n• Durabilité et performance énergétique\r\n• Mobilité électrique\r\n\r\nAvec un accès direct au centre de Lisbonne et à diverses régions du pays grâce à sa proximité avec les autoroutes A1 et A8 (Lisbonne-Porto), ainsi que les A9 et A16 (Ouest), ÉLOU Jardins est également situé à moins de 10 km de l'aéroport et du pont Vasco da Gama.\r\n\r\nL’emplacement bénéficie d'un réseau de transports en commun, incluant des bus et le métro, facilitant une vie plus respectueuse de l'environnement. La nouvelle station de métro « Torres da Bela Vista » offrira un accès direct à Odivelas et à différents points de la capitale, à quelques minutes de marche du bâtiment.\r\n\r\nDistances: • 18 minutes | en voiture jusqu'au centre de Lisbonne\r\n• 10 minutes | en voiture jusqu'à l'aéroport et au pont Vasco da Gama\r\n\r\nConçu et développé par l'équipe dirigée par l'architecte Cristina Rocheta de SOLYD Property Developers, ce nouveau bâtiment en copropriété sécurisée comprend des appartements de 1 à 4 pièces, avec des surfaces allant de 81 m² à 239 m² et des balcons et terrasses pouvant atteindre 89 m². ÉLOU Jardins propose des appartements modernes équipés de matériaux et équipements de qualité. Avec un stationnement souterrain et un espace extérieur commun, cet espace privé offre une grande zone de loisirs avec pelouse et piscine, parfait pour se détendre en famille ou entre amis.\r\n\r\nDe plus, le projet comprend un hall décoré, une salle de sport entièrement équipée et une salle polyvalente à disposition pendant votre temps libre. Les normes de qualité élevées s’appliquent aux finitions intérieures: revêtements muraux, menuiserie laquée, portes de haute sécurité, sols, climatisation à haute performance énergétique et placards. Les cuisines sont entièrement équipées avec des appareils électroménagers haut de gamme et des armoires de rangement. Les salles de bains sont dotées d'équipements et de robinetteries de marques renommées.\r\n\r\nCe projet est axé sur la durabilité, avec la réduction de l’impact environnemental comme priorité. Dans le bâtiment ÉLOU Jardins, chaque choix est fait dans le respect de l'environnement, en misant sur la performance énergétique et des matériaux durables et recyclables.\r\n\r\nPorta da Frente Christie's est une agence immobilière active sur le marché depuis plus de deux décennies, spécialisée dans la vente et la location des meilleurs biens immobiliers, complexes résidentiels et ensembles immobiliers. Sélectionnée par la prestigieuse marque Christie's International Real Estate pour la représenter au Portugal, dans les régions de Lisbonne, Cascais, Oeiras et Alentejo, la mission principale de Porta da Frente Christie's est d'assurer un service d'excellence à tous ses clients.",
"equipments": [
"Acesso para Deficientes",
"Ar Condicionado",
"Banheira",
"Blackouts",
"Cozinha Equipada",
"Domótica",
"Elevador",
"Estores Electricos",
"Exaustor",
"Forno",
"Frigorífico",
"Garagem",
"Ginásio",
"Isolamento Acústico",
"Isolamento Térmico",
"Jardim",
"Máquina de Lavar Louça",
"Máquina de Lavar Roupa",
"Máquina de Secar Roupa",
"Piscina Comum",
"Placa Vitrocerâmica",
"Poliban",
"Porta Alta Segurança",
"Portão Eléctrico",
"Roupeiros",
"Terraço",
"Video Porteiro",
"Vidros Duplos",
"Microondas",
"Sala de Condomínio",
"Varanda"
],
"equipments_en": [
"Disabled People Access",
"Air Conditioning",
"Bathtub",
"Blackouts",
"Equipped kitchen",
"Home automation",
"Elevator",
"Electric blinds",
"Exhaust",
"Oven",
"Fridge",
"Garage",
"Gym",
"Acoustic Insulation",
"Thermal Insulation",
"Garden",
"Dishwasher",
"Washing Machine",
"Drier machine",
"Shared Swimming Pool",
"Vitroceramic Cooktop",
"Shower",
"High Security Door",
"Electric gate",
"Wardrobes",
"Terrace",
"Video Doorman",
"Double Glazed",
"Microwave Oven",
"Condominium Room",
"Balcony"
],
"equipments_fr": [
"Accès mobilité réduite",
"Climatisation",
"Baignoire",
"Coupures de courant",
"Cuisine équipée",
"Automatisation de la maison",
"Ascenseur",
"Stores électriques",
"Échappement",
"Four",
"Frigo",
"Garage",
"Gym",
"Isolation sonore",
"Isolation thermique",
"Jardin",
"Lave-vaisselle",
"Machine à laver",
"Machine sécheuse",
"Piscine partagée",
"Table de cuisson vitrocéramique",
"Douche",
"Porte haute sécurité",
"Portail électrique",
"Armoires",
"Terrasse",
"Portier vidéo",
"Double vitrage",
"Micro-ondes",
"Salle de condominium",
"Balcon"
],
"floor": 3,
"fraction": "A2 | 3B",
"gross_private_area": 116,
"id": "a0cTg000004cQaHIAU",
"is_exclusive": true,
"land_area": 0,
"languages": [
"pt"
],
"last_updated": "2024-12-19T20:13:59.999Z",
"latitude": 38.810152087870094,
"longitude": -9.169807348582665,
"outdoor_area": 32,
"parent_property_id": "a0cTg000004bvHyIAI",
"parish": "Loures",
"parish_id": "loures-loures",
"parking_spaces": 2,
"photos": [
{
"main_photo": true,
"sequence": 1,
"url": "https://static.portadafrente.com/PF35335/ELOU_Still_01_Sala_1731597271677.jpg"
},
{
"main_photo": false,
"sequence": 2,
"url": "https://static.portadafrente.com/PF35335/ELOU_Still_02_Suite_1731597271676.jpg"
},
{
"main_photo": false,
"sequence": 3,
"url": "https://static.portadafrente.com/PF35335/ELOU_Still_03_Suite_IS_1731597271679.jpg"
},
{
"main_photo": false,
"sequence": 4,
"url": "https://static.portadafrente.com/PF35335/Balcony_V3+%281%29_1731597271679.jpg"
},
{
"main_photo": false,
"sequence": 5,
"url": "https://static.portadafrente.com/PF35335/Bird_View_V3_1731597271678.jpg"
}
],
"plan_url": "https://portadafrente.my.salesforce.com/sfc/p/1t000000D6v6/a/Tg0000020ZXi/guRWaB.lg7GIFiX2..QmkDonTMDtLp.J3Dp9HdDIFKI",
"postal_code": "1300-063",
"price": 507640,
"price_on_application": false,
"rooms": 3,
"slug_url": "apartamento-t3-loures-venda-a0cTg000004cQaHIAU",
"slug_url_en": "3-bedroom-apartment-loures-sale-a0cTg000004cQaHIAU",
"slug_url_fr": "appartement-4-pieces-loures-vente-a0cTg000004cQaHIAU",
"state_id": "under-construction",
"surroundings": [
"Aeroporto",
"Áreas de Lazer Infantil",
"Auto-Estrada",
"Banco",
"Bombeiros",
"Campo de Golfe",
"Centro Comercial",
"Centro da Cidade",
"Condomínio Fechado",
"Escola",
"Espaços Verdes",
"Farmácia",
"Ginásio",
"Hipermercado",
"Hospital",
"Mercado",
"Orientação Solar Nascente",
"Orientação Solar Poente",
"Orientação Solar Sul",
"Piscinas",
"Polícia",
"Posto de Combustível",
"Praça Táxis",
"Transportes Públicos",
"Vista para Cidade",
"Vista para Jardim",
"Vista para Montanha",
"Zona Comercial",
"Estacionamento"
],
"surroundings_en": [
"Airport",
"Children's play areas",
"Freeway",
"Bank",
"Fire department",
"Golf course",
"Shopping center",
"Town centre",
"Closed condominium",
"School",
"Green spaces",
"Pharmacy",
"Gym",
"Hypermarket",
"Hospital",
"Mart",
"Rising Solar Orientation",
"Solar Orientation West",
"Solar Orientation South",
"Pools",
"Police",
"Gas station",
"Taxis Square",
"Public Transportation",
"City View",
"Garden View",
"Mountain View",
"Commercial Area",
"Parking"
],
"surroundings_fr": [
"Aéroport",
"Aires de jeux pour enfants",
"Autoroute",
"Banque",
"Pompiers",
"Terrain de golf",
"Centre commercial",
"Centre-ville",
"Copropriété fermée",
"École",
"Espaces verts",
"Pharmacie",
"Gym",
"grande surface",
"Hôpital",
"Marché",
"Orientation solaire croissante",
"Orientation solaire Ouest",
"Orientation solaire Sud",
"Piscines",
"Police",
"Station-essence",
"Taxis Square",
"Transport public",
"Vue de la ville",
"Vue du jardin",
"Vue sur la montagne",
"Zone commerciale",
"Parking"
],
"title": "Apartamento T3, Loures",
"title_en": "3 Bedroom Apartment, Loures",
"title_fr": "Appartement 4 pièces, Loures",
"zone": "Loures",
"zone_id": "loures-loures"
},
"highlight": {},
"highlights": [],
"text_match": 100,
"text_match_info": {
"best_field_score": "0",
"best_field_weight": 12,
"fields_matched": 4,
"num_tokens_dropped": 1,
"score": "100",
"tokens_matched": 0,
"typo_prefix_score": 255
}
}
{
"document": {
"address": "Rua Gonçalo Crespo e Rua José de Melo Pereira de Vasconcelos, 1ºB (1º direito)",
"availability_ids": "disponivel",
"bathrooms": 4,
"business_type_id": "sale",
"category_id": "apartment",
"category_name": "Apartamento",
"category_name_en": "Apartment",
"category_name_fr": "Appartement",
"code": "PF29493",
"county": "Cascais",
"county_id": "cascais",
"cover_photo": "https://static.portadafrente.com/PF29493/29_1713354346019.jpg",
"description": "Edifício no Centro de Carcavelos de apenas 5 apartamentos, de tipologias T3 e T4 Com áreas generosas e amplas varandas, este T3 com 185,50m2 de área de construção e varanda com 19,60m2, compõe-se da seguinte forma: - Hall entrada - I.S - sala comum com acesso a varanda e uma área versátil que poderá ser usada como escritório ou outro ambiente de sala - cozinha totalmente equipada com excelente varanda - 3 suites (uma delas com closet) - 2 lugares de estacionamento Excelente opção quer para viver quer para investimento, em pleno Centro a 2 minutos a pé da estação e de todo o tipo de comércio e serviços, a 10 minutos a pé da praia, colégio Internacional, e Universidade Nova. Ainda em fase de construção, para entrega no último semestre de 2023. A construção recente da Universidade Nova trouxe uma nova vida a esta localização, agora potenciada pelo dinamismo jovem e pelas novas oportunidades. A sua proximidade com as praias da linha resulta numa área cada vez mais procurada para habitação. A Porta da Frente Christie’s é uma empresa de mediação imobiliária que trabalha no mercado há mais de duas décadas, focando-se nos melhores imóveis e empreendimentos, quer para venda quer para arrendamento. A empresa foi selecionada pela prestigiada marca Christie’s International Real Estate para representar Portugal, nas zonas de Lisboa, Cascais, Oeiras e Alentejo. A principal missão da Porta da Frente Christie’s é privilegiar um serviço de excelência a todos os nossos clientes.",
"description_en": "Building, in the centre of Carcavelos, composed only by 5 apartments, with typologies between 3 bedroom apartments and 4 bedroom apartments\r\n\r\nWith generous areas and ample balconies, this 3 bedroom apartment, with a 185,50 sqm construction area and a 19,60 sqm balcony, is composed as follows:\r\n- Entry hall\r\n- Bathroom\r\n- Common living room with direct access to a balcony and to a versatile area that can work as an office or as another living room´s environment\r\n- fully equipped kitchen with direct access to a fabulous balcony\r\n- 3 suites (one of them with a closet)\r\n- 2 parking spaces\r\n\r\nExcellent option to live or as an investment, in the heart of the centre, a 2 minutes´ walk from the station and all sorts of local business and services, a 10 minutes´ walk from the beach, International College and Nova University.\r\nStill under construction, with the delivery predicted to the last semester of 2023.\r\n\r\nThe recent construction of Nova University brought a new life to this location, now enhanced by young dynamism and new opportunities. Its proximity to the beaches results in an increasingly sought after area for housing.\r\n\r\nPorta da Frente Christie’s is a real estate agency that has been operating in the market for more than two decades. Its focus lays on the highest quality houses and developments, not only in the selling market, but also in the renting market. The company was elected by the prestigious brand Christie’s – one of the most reputable auctioneers, Art institutions and Real Estate of the world – to be represented in Portugal, in the areas of Lisbon, Cascais, Oeiras, Sintra and Alentejo. The main purpose of Porta da Frente Christie’s is to offer a top-notch service to our customers.",
"description_fr": "Immeuble au centre de Carcavelos avec seulement 5 appartements, des 4 et 5 pièces.\r\n\r\nAvec des espaces généreux et de grands balcons, appartement 4 pièces avec balcon. D’une surface de plancher de 185,50 m2, avec balcon de 19,60 m2, l’appartement se compose comme suit : \r\n- hall d'entrée \r\n- WC \r\n- salon et salle à manger avec balcon et espace pouvant être aménagé en bureau ou en un coin dans le salon\r\n- cuisine entièrement équipée avec un excellent balcon \r\n- 3 suites (dont une avec dressing) \r\n- 2 places de parking\r\n\r\nExcellente option soit pour vivre soit pour investir, en plein centre de Carcavels, à 2 minutes à pied de la gare et de tous types de commerces et services, à 10 minutes à pied de la plage, du Collège international et de l'Université Nova.\r\n\r\nEncore en construction, les appartements devant être terminés au deuxième semestre 2023.\r\n\r\nLa récente construction de l’Université Nova a donné une nouvelle vie à cette région, maintenant renforcée par le jeune dynamisme et les nouvelles opportunités. Sa proximité avec les plages se traduit par une zone de logement de plus en plus recherchée.\r\n\r\nPorta da Frente Christie's est une agence immobilière qui opère sur le marché depuis plus de deux décennies, se concentrant sur les meilleurs biens immobiliers, complexes résidentiels et aménagements, au niveau de la vente et de la location. L'agence a été sélectionnée par la prestigieuse marque Christie's International Real Estate pour la représenter au Portugal, dans les régions de Lisbonne, Cascais, Oeiras et Alentejo. La mission principale de Porta da Frente Christie's est d'assurer un service d'excellence à tous ses clientes.",
"equipments": [
"Ar Condicionado",
"Cozinha Equipada",
"Elevador",
"Garagem",
"Gás Canalizado",
"Roupeiros",
"Vidros Duplos",
"Varanda",
"Circuito Fechado"
],
"equipments_en": [
"Air Conditioning",
"Equipped kitchen",
"Elevator",
"Garage",
"Piped gas",
"Wardrobes",
"Double Glazed",
"Balcony",
"Closed TV Circuit"
],
"equipments_fr": [
"Climatisation",
"Cuisine équipée",
"Ascenseur",
"Garage",
"Gaz canalisé",
"Armoires",
"Double vitrage",
"Balcon",
"Circuit TV fermé"
],
"floor": 1,
"fraction": "B 1ºdto",
"gross_private_area": 185.5,
"id": "a0c3Y00000V3qiWQAR",
"is_exclusive": false,
"land_area": 0,
"languages": [
"pt"
],
"last_updated": "2024-12-19T20:13:20.456Z",
"latitude": 38.689339762500005,
"longitude": -9.339427825,
"outdoor_area": 19.6,
"parent_property_id": "a0c3Y00000V3qhIQAR",
"parish": "Carcavelos E Parede",
"parish_id": "cascais-carcavelos-e-parede",
"parking_spaces": 2,
"photos": [
{
"main_photo": true,
"sequence": 1,
"url": "https://static.portadafrente.com/PF29493/29_1713354346019.jpg"
},
{
"main_photo": false,
"sequence": 2,
"url": "https://static.portadafrente.com/PF29493/30_1713354346019.jpg"
},
{
"main_photo": false,
"sequence": 3,
"url": "https://static.portadafrente.com/PF29493/01_1713354306379.jpg"
},
{
"main_photo": false,
"sequence": 4,
"url": "https://static.portadafrente.com/PF29493/02_1713354306380.jpg"
},
{
"main_photo": false,
"sequence": 5,
"url": "https://static.portadafrente.com/PF29493/03_1713354306380.jpg"
},
{
"main_photo": false,
"sequence": 6,
"url": "https://static.portadafrente.com/PF29493/04_1713354306380.jpg"
},
{
"main_photo": false,
"sequence": 7,
"url": "https://static.portadafrente.com/PF29493/05_1713354306381.jpg"
},
{
"main_photo": false,
"sequence": 8,
"url": "https://static.portadafrente.com/PF29493/06_1713354306381.jpg"
},
{
"main_photo": false,
"sequence": 9,
"url": "https://static.portadafrente.com/PF29493/07_1713354306381.jpg"
},
{
"main_photo": false,
"sequence": 10,
"url": "https://static.portadafrente.com/PF29493/08_1713354306382.jpg"
},
{
"main_photo": false,
"sequence": 11,
"url": "https://static.portadafrente.com/PF29493/09_1713354306382.jpg"
},
{
"main_photo": false,
"sequence": 12,
"url": "https://static.portadafrente.com/PF29493/10_1713354306382.jpg"
},
{
"main_photo": false,
"sequence": 13,
"url": "https://static.portadafrente.com/PF29493/11_1713354325999.jpg"
},
{
"main_photo": false,
"sequence": 14,
"url": "https://static.portadafrente.com/PF29493/13_1713354326000.jpg"
},
{
"main_photo": false,
"sequence": 15,
"url": "https://static.portadafrente.com/PF29493/14_1713354326000.jpg"
},
{
"main_photo": false,
"sequence": 16,
"url": "https://static.portadafrente.com/PF29493/26_1713354346018.jpg"
},
{
"main_photo": false,
"sequence": 17,
"url": "https://static.portadafrente.com/PF29493/24_1713354346017.jpg"
},
{
"main_photo": false,
"sequence": 18,
"url": "https://static.portadafrente.com/PF29493/25_1713354346017.jpg"
},
{
"main_photo": false,
"sequence": 19,
"url": "https://static.portadafrente.com/PF29493/15_1713354326000.jpg"
},
{
"main_photo": false,
"sequence": 20,
"url": "https://static.portadafrente.com/PF29493/20_1713354326001.jpg"
},
{
"main_photo": false,
"sequence": 21,
"url": "https://static.portadafrente.com/PF29493/21_1713354346016.jpg"
},
{
"main_photo": false,
"sequence": 22,
"url": "https://static.portadafrente.com/PF29493/22_1713354346017.jpg"
},
{
"main_photo": false,
"sequence": 23,
"url": "https://static.portadafrente.com/PF29493/16_1713354326000.jpg"
},
{
"main_photo": false,
"sequence": 24,
"url": "https://static.portadafrente.com/PF29493/19_1713354326001.jpg"
},
{
"main_photo": false,
"sequence": 25,
"url": "https://static.portadafrente.com/PF29493/17_1713354326001.jpg"
},
{
"main_photo": false,
"sequence": 26,
"url": "https://static.portadafrente.com/PF29493/18_1713354326001.jpg"
},
{
"main_photo": false,
"sequence": 27,
"url": "https://static.portadafrente.com/PF29493/12_1713354325999.jpg"
},
{
"main_photo": false,
"sequence": 28,
"url": "https://static.portadafrente.com/PF29493/23_1713354346017.jpg"
},
{
"main_photo": false,
"sequence": 29,
"url": "https://static.portadafrente.com/PF29493/27_1713354346018.jpg"
},
{
"main_photo": false,
"sequence": 30,
"url": "https://static.portadafrente.com/PF29493/28_1713354346018.jpg"
},
{
"main_photo": false,
"sequence": 31,
"url": "https://static.portadafrente.com/PF29493/PF29493%20-%201B_1713370662857.png"
}
],
"plan_url": "https://portadafrente.my.salesforce.com/sfc/p/1t000000D6v6/a/3Y000001YB92/fomsFuLQuzRnNg.aEJ1FnS_zm1WiPvFTkPODLzv9f5Y",
"postal_code": "2775-593",
"price": 1180000,
"price_on_application": false,
"published_at": "2022-12-20",
"rooms": 3,
"slug_url": "apartamento-t3-cascais-venda-a0c3Y00000V3qiWQAR",
"slug_url_en": "3-bedroom-apartment-cascais-sale-a0c3Y00000V3qiWQAR",
"slug_url_fr": "appartement-4-pieces-cascais-vente-a0c3Y00000V3qiWQAR",
"state_id": "under-construction",
"surroundings": [
"Áreas de Lazer Infantil",
"Auto-Estrada",
"Banco",
"Bombeiros",
"Centro Comercial",
"Centro da Cidade",
"Condomínio Fechado",
"Escola",
"Estação Ferroviária",
"Estação Rodoviária",
"Farmácia",
"Ginásio",
"Hipermercado",
"Mercado",
"Estacionamento"
],
"surroundings_en": [
"Children's play areas",
"Freeway",
"Bank",
"Fire department",
"Shopping center",
"Town centre",
"Closed condominium",
"School",
"Train station",
"Railway station",
"Pharmacy",
"Gym",
"Hypermarket",
"Mart",
"Parking"
],
"surroundings_fr": [
"Aires de jeux pour enfants",
"Autoroute",
"Banque",
"Pompiers",
"Centre commercial",
"Centre-ville",
"Copropriété fermée",
"École",
"Gare",
"Gare",
"Pharmacie",
"Gym",
"grande surface",
"Marché",
"Parking"
],
"title": "Apartamento T3, Cascais",
"title_en": "3 Bedroom Apartment, Cascais",
"title_fr": "Appartement 4 pièces, Cascais",
"zone": "Carcavelos",
"zone_id": "cascais-carcavelos"
},
"highlight": {},
"highlights": [],
"text_match": 100,
"text_match_info": {
"best_field_score": "0",
"best_field_weight": 12,
"fields_matched": 4,
"num_tokens_dropped": 1,
"score": "100",
"tokens_matched": 0,
"typo_prefix_score": 255
}
}
{
"document": {
"address": "Travessa da Giesta 5 Quinta do Perú",
"availability_ids": "disponivel",
"bathrooms": 6,
"business_type_id": "sale",
"category_id": "house",
"category_name": "Moradia",
"category_name_en": "House",
"category_name_fr": "Maison normal",
"code": "PF29774",
"county": "Sesimbra",
"county_id": "sesimbra",
"cover_photo": "https://static.portadafrente.com/PF29774/44_1682340343681.jpg",
"description": "Luxo e Exclusividade na Quinta do Perú Descubra a moradia dos seus sonhos no prestigioso condomínio Quinta do Perú, onde a sofisticação e o conforto se encontram em perfeita harmonia. Esta fantástica propriedade oferece uma vista deslumbrante para o lago e está situada ao lado de um dos melhores campos de golfe de Portugal. Arquitetura Contemporânea e Funcionalidade Excecional Projetada com um estilo contemporâneo e linhas direitas, esta moradia destaca-se pelos seus espaços amplos e funcionais, onde cada detalhe foi cuidadosamente pensado para proporcionar uma experiência de vida única. Distribuição dos Espaços Piso -1: Garagem e Zona Técnica: Espaço amplo para estacionamento e armazenamento. Cozinha: Equipada com eletrodomésticos de alta gama Smeg & Siemens. Copa e Sala de Jantar: Ambientes perfeitos para refeições em família. Casa de Banho Social: Conforto e praticidade. Sala de Estar em Mezanino: Com um impressionante pé direito de 7 metros e vistas frontais para o lago e o campo de golfe. Sala de Estar com Zona de Televisão: Ambiente acolhedor com vista para um jardim de inverno. 1 Suite: Privacidade e conforto. Ginásio: Equipado para os seus treinos diários. Exterior: Grande terraço, piscina infinita aquecida e um magnífico jardim paisagístico. Rés-do-Chão: Escritório: Perfeito para trabalhar em casa. Hall de Entrada: Receção elegante. Sala de Estar/Biblioteca: Espaço de relaxamento e leitura. 4 Suites: Cada uma com o seu próprio estilo e conforto. 1º Piso: Sala de Estar/Sala de Jogos: Espaço versátil para entretenimento. Casa de Banho de Apoio: Conveniência adicional. Acesso ao Roof Top: Com vista espetacular para o lago e o campo de golfe. Conforto e Tecnologia de Ponta A moradia está equipada com piso radiante e ar condicionado em todas as divisões, garantindo uma temperatura agradável durante todo o ano. O sistema de CCTV, a automação residencial, os painéis solares e o sistema de aspiração central completam o conjunto de comodidades de alta tecnologia. Localização Privilegiada A Quinta do Perú é um refúgio de tranquilidade e privacidade, situado a apenas 30 minutos do centro de Lisboa e do aeroporto, com acesso fácil por duas pontes. Este resort exclusivo oferece estradas arborizadas, trilhas naturais para caminhadas e ciclismo, e segurança 24 horas. O Quinta do Peru Golf & Country Club é consistentemente classificado entre os 15 melhores de Portugal, atestando a sua excelência. Proximidade de Praias e Serviços Além das comodidades internas, a localização é ideal para os amantes da natureza e do mar, com várias praias próximas, incluindo a famosa praia Portinho da Arrábida. A pitoresca vila de Azeitão está a menos de 10 minutos de carro, oferecendo uma rica oferta de serviços e gastronomia. Não perca a oportunidade de viver num dos mais exclusivos e belos condomínios de Portugal. Esta moradia na Quinta do Perú é a definição de luxo, conforto e tranquilidade. Agende já a sua visita e descubra o seu novo lar!",
"description_en": "Luxury and Exclusivity at Quinta do Perú\r\nDiscover the home of your dreams in the prestigious Quinta do Perú condominium, where sophistication and comfort come together in perfect harmony. This fantastic property offers stunning lake views and is situated next to one of the best golf courses in Portugal.\r\n\r\nContemporary Architecture and Exceptional Functionality\r\nDesigned with a contemporary style and straight lines, this villa stands out for its large and functional spaces, where every detail has been carefully thought out to provide a unique living experience.\r\n\r\nDistribution of Spaces\r\nFloor -1:\r\nGarage and Technical Area: Ample space for parking and storage.\r\nKitchen: Equipped with high-end Smeg & Siemens appliances.\r\nPantry and Dining Room: Perfect environments for family meals.\r\nSocial Bathroom: Comfort and practicality.\r\nMezzanine Living Room: With an impressive ceiling height of 7 meters and frontal views of the lake and the golf course.\r\nLiving Room with Television Area: Cozy atmosphere overlooking a winter garden.\r\n1 Suite: Privacy and comfort.\r\nGym: Equipped for your daily workouts.\r\nOutside: Large terrace, heated infinity pool and a magnificent landscaped garden.\r\n\r\nGround Floor:\r\nOffice: Perfect for working from home.\r\nEntrance Hall: Elegant reception.\r\nLiving Room/Library: Space for relaxation and reading.\r\n4 Suites: Each with its own style and comfort.\r\n\r\n\r\n1st Floor:\r\nLiving Room/Games Room: Versatile space for entertaining.\r\nSupport Bathroom: Additional convenience.\r\nRoof Top Access: With spectacular views of the lake and golf course.\r\nComfort and Cutting-edge Technology\r\nThe villa is equipped with underfloor heating and air conditioning in all rooms, ensuring a pleasant temperature throughout the year. The CCTV system, home automation, solar panels and central vacuum system complete the set of high-tech amenities.",
"description_fr": "Luxe et exclusivité à Quinta do Perú\r\nDécouvrez la maison de vos rêves dans la prestigieuse copropriété Quinta do Perú, où sophistication et confort s'unissent en parfaite harmonie. Cette fantastique propriété offre une vue imprenable sur le lac et est située à côté de l'un des meilleurs terrains de golf du Portugal.\r\nArchitecture contemporaine et fonctionnalité exceptionnelle\r\nConçue avec un style contemporain et des lignes droites, cette villa se distingue par ses espaces spacieux et fonctionnels, où chaque détail a été soigneusement pensé pour offrir une expérience de vie unique.\r\n\r\nRépartition des espaces\r\n1er étage:\r\nGarage et zone technique : Grand espace pour le stationnement et le stockage.\r\nCuisine : Equipée d'électroménagers haut de gamme Smeg & Siemens.\r\nGarde-manger et salle à manger : environnements parfaits pour les repas en famille.\r\nSalle de bain sociale : Confort et praticité.\r\nSalon Mezzanine : Avec une hauteur de plafond impressionnante de 7 mètres et une vue frontale sur le lac et le terrain de golf.\r\nSéjour avec Coin Télévision : Ambiance cosy donnant sur un jardin d'hiver.\r\n1 Suite : Intimité et confort.\r\nSalle de sport : équipée pour vos entraînements quotidiens.\r\nA l'extérieur : Grande terrasse, piscine chauffée à débordement et un magnifique jardin paysagé.\r\n\r\nRez-de-chaussée:\r\nBureau : Idéal pour travailler à domicile.\r\nHall d'entrée : Réception élégante.\r\nSalon/Bibliothèque : Espace de détente et de lecture.\r\n4 Suites : Chacune avec son propre style et son confort.\r\n\r\n\r\n1er étage:\r\nSalon/Salle de jeux : Espace polyvalent pour se divertir.\r\nSalle de bain de soutien : commodité supplémentaire.\r\nAccès sur le toit : Avec des vues spectaculaires sur le lac et le terrain de golf.\r\nConfort et technologie de pointe\r\nLa villa est équipée du chauffage au sol et de la climatisation dans toutes les pièces, assurant une température agréable tout au long de l'année. Le système de vidéosurveillance, la domotique, les panneaux solaires et le système d'aspiration centralisé complètent l'ensemble des équipements de haute technologie.\r\nLuxe et exclusivité à Quinta do Perú\r\nDécouvrez la maison de vos rêves dans la prestigieuse copropriété Quinta do Perú, où sophistication et confort s'unissent en parfaite harmonie. Cette fantastique propriété offre une vue imprenable sur le lac et est située à côté de l'un des meilleurs terrains de golf du Portugal.\r\n\r\nArchitecture contemporaine et fonctionnalité exceptionnelle\r\nConçue avec un style contemporain et des lignes droites, cette villa se distingue par ses espaces spacieux et fonctionnels, où chaque détail a été soigneusement pensé pour offrir une expérience de vie unique.\r\n\r\nRépartition des espaces\r\n1er étage:\r\nGarage et zone technique : Grand espace pour le stationnement et le stockage.\r\nCuisine : Equipée d'électroménagers haut de gamme Smeg & Siemens.\r\nGarde-manger et salle à manger : environnements parfaits pour les repas en famille.\r\nSalle de bain sociale : Confort et praticité.\r\nSalon Mezzanine : Avec une hauteur de plafond impressionnante de 7 mètres et une vue frontale sur le lac et le terrain de golf.\r\nSéjour avec Coin Télévision : Ambiance cosy donnant sur un jardin d'hiver.\r\n1 Suite : Intimité et confort.\r\nSalle de sport : équipée pour vos entraînements quotidiens.\r\nA l'extérieur : Grande terrasse, piscine chauffée à débordement et un magnifique jardin paysagé.\r\n\r\nRez-de-chaussée:\r\nBureau : Idéal pour travailler à domicile.\r\nHall d'entrée : Réception élégante.\r\nSalon/Bibliothèque : Espace de détente et de lecture.\r\n4 Suites : Chacune avec son propre style et son confort.\r\n\r\n\r\n1er étage:\r\nSalon/Salle de jeux : Espace polyvalent pour se divertir.\r\nSalle de bain de soutien : commodité supplémentaire.\r\nAccès sur le toit : Avec des vues spectaculaires sur le lac et le terrain de golf.\r\nConfort et technologie de pointe\r\nLa villa est équipée du chauffage au sol et de la climatisation dans toutes les pièces, assurant une température agréable tout au long de l'année. Le système de vidéosurveillance, la domotique, les panneaux solaires et le système d'aspiration centralisé complètent l'ensemble des équipements de haute technologie.",
"equipments": [
"Alarme",
"Aquecimento Central",
"Ar Condicionado",
"Aspiração Central",
"Blackouts",
"Cozinha Equipada",
"Domótica",
"Garagem",
"Jardim",
"Painéis fotovoltaicos",
"Piscina aquecida",
"Piso Radiante",
"Carregamento Veículos Eléctricos",
"Segurança 24 horas",
"Vídeo vigilância"
],
"equipments_en": [
"Alarm",
"Central Heating",
"Air Conditioning",
"Central Vacuum Cleaning System",
"Blackouts",
"Equipped kitchen",
"Home automation",
"Garage",
"Garden",
"Photovoltaic panels",
"Heated Swimming Pool",
"Radiant Floor Heating",
"EV charging station",
"24 hour security",
"Video surveillance"
],
"equipments_fr": [
"Alarme",
"Chauffage central",
"Climatisation",
"Aspirateur centralisé",
"Coupures de courant",
"Cuisine équipée",
"Automatisation de la maison",
"Garage",
"Jardin",
"Panneaux photovoltaïques",
"Piscine chauffée",
"Chauffage radiant au sol",
"Borne de recharge pour voitures électriques",
"Sécurité 24h / 24",
"Vidéosurveillance"
],
"floor": null,
"fraction": "",
"gross_build_area": 533,
"gross_private_area": 329,
"id": "a0c3Y00000WkouQQAR",
"is_exclusive": false,
"land_area": 1720,
"languages": [
"pt"
],
"last_updated": "2024-12-19T20:13:04.592Z",
"latitude": 38.54768464000001,
"longitude": -9.0546251,
"parish": "Quinta Do Conde",
"parish_id": "sesimbra-quinta-do-conde",
"parking_spaces": 3,
"photos": [
{
"main_photo": false,
"sequence": 1,
"url": "https://static.portadafrente.com/PF29774/01_1682340343678.jpg"
},
{
"main_photo": false,
"sequence": 2,
"url": "https://static.portadafrente.com/PF29774/03_1682340343678.jpg"
},
{
"main_photo": false,
"sequence": 3,
"url": "https://static.portadafrente.com/PF29774/02_1682340343685.jpg"
},
{
"main_photo": false,
"sequence": 4,
"url": "https://static.portadafrente.com/PF29774/04_1682340343689.jpg"
},
{
"main_photo": false,
"sequence": 5,
"url": "https://static.portadafrente.com/PF29774/23_1682340343688.jpg"
},
{
"main_photo": false,
"sequence": 6,
"url": "https://static.portadafrente.com/PF29774/22_1682340343685.jpg"
},
{
"main_photo": false,
"sequence": 7,
"url": "https://static.portadafrente.com/PF29774/34_1682340343687.jpg"
},
{
"main_photo": false,
"sequence": 8,
"url": "https://static.portadafrente.com/PF29774/35_1682340343686.jpg"
},
{
"main_photo": false,
"sequence": 9,
"url": "https://static.portadafrente.com/PF29774/36_1682340343686.jpg"
},
{
"main_photo": false,
"sequence": 10,
"url": "https://static.portadafrente.com/PF29774/25_1682340343691.jpg"
},
{
"main_photo": false,
"sequence": 11,
"url": "https://static.portadafrente.com/PF29774/24_1682340343691.jpg"
},
{
"main_photo": false,
"sequence": 12,
"url": "https://static.portadafrente.com/PF29774/40_1682340343691.jpg"
},
{
"main_photo": false,
"sequence": 13,
"url": "https://static.portadafrente.com/PF29774/39_1682340343677.jpg"
},
{
"main_photo": false,
"sequence": 14,
"url": "https://static.portadafrente.com/PF29774/27_1682340343692.jpg"
},
{
"main_photo": false,
"sequence": 15,
"url": "https://static.portadafrente.com/PF29774/26_1682340343692.jpg"
},
{
"main_photo": false,
"sequence": 16,
"url": "https://static.portadafrente.com/PF29774/30_1682340343697.jpg"
},
{
"main_photo": false,
"sequence": 17,
"url": "https://static.portadafrente.com/PF29774/31_1682340343696.jpg"
},
{
"main_photo": false,
"sequence": 18,
"url": "https://static.portadafrente.com/PF29774/28_1682340343694.jpg"
},
{
"main_photo": false,
"sequence": 19,
"url": "https://static.portadafrente.com/PF29774/29_1682340343693.jpg"
},
{
"main_photo": false,
"sequence": 20,
"url": "https://static.portadafrente.com/PF29774/32_1682340343696.jpg"
},
{
"main_photo": false,
"sequence": 21,
"url": "https://static.portadafrente.com/PF29774/33_1682340343695.jpg"
},
{
"main_photo": false,
"sequence": 22,
"url": "https://static.portadafrente.com/PF29774/05_1682340343706.jpg"
},
{
"main_photo": false,
"sequence": 23,
"url": "https://static.portadafrente.com/PF29774/07_1682340343697.jpg"
},
{
"main_photo": false,
"sequence": 24,
"url": "https://static.portadafrente.com/PF29774/06_1682340343706.jpg"
},
{
"main_photo": false,
"sequence": 25,
"url": "https://static.portadafrente.com/PF29774/08_1682340343705.jpg"
},
{
"main_photo": false,
"sequence": 26,
"url": "https://static.portadafrente.com/PF29774/09_1682340343706.jpg"
},
{
"main_photo": false,
"sequence": 27,
"url": "https://static.portadafrente.com/PF29774/11_1682340343704.jpg"
},
{
"main_photo": false,
"sequence": 28,
"url": "https://static.portadafrente.com/PF29774/10_1682340343705.jpg"
},
{
"main_photo": false,
"sequence": 29,
"url": "https://static.portadafrente.com/PF29774/12_1682340343704.jpg"
},
{
"main_photo": false,
"sequence": 30,
"url": "https://static.portadafrente.com/PF29774/42_1682340343703.jpg"
},
{
"main_photo": false,
"sequence": 31,
"url": "https://static.portadafrente.com/PF29774/47_1682340343679.jpg"
},
{
"main_photo": false,
"sequence": 32,
"url": "https://static.portadafrente.com/PF29774/20_1682340343703.jpg"
},
{
"main_photo": false,
"sequence": 33,
"url": "https://static.portadafrente.com/PF29774/19_1682340343703.jpg"
},
{
"main_photo": false,
"sequence": 34,
"url": "https://static.portadafrente.com/PF29774/21_1682340343703.jpg"
},
{
"main_photo": false,
"sequence": 35,
"url": "https://static.portadafrente.com/PF29774/18_1682340343704.jpg"
},
{
"main_photo": false,
"sequence": 36,
"url": "https://static.portadafrente.com/PF29774/14_1682340343707.jpg"
},
{
"main_photo": false,
"sequence": 37,
"url": "https://static.portadafrente.com/PF29774/13_1682340343706.jpg"
},
{
"main_photo": false,
"sequence": 38,
"url": "https://static.portadafrente.com/PF29774/17_1682340343707.jpg"
},
{
"main_photo": false,
"sequence": 39,
"url": "https://static.portadafrente.com/PF29774/15_1682340343712.jpg"
},
{
"main_photo": false,
"sequence": 40,
"url": "https://static.portadafrente.com/PF29774/37_1682340343698.jpg"
},
{
"main_photo": false,
"sequence": 41,
"url": "https://static.portadafrente.com/PF29774/16_1682340343710.jpg"
},
{
"main_photo": false,
"sequence": 42,
"url": "https://static.portadafrente.com/PF29774/49_1682340343678.jpg"
},
{
"main_photo": false,
"sequence": 43,
"url": "https://static.portadafrente.com/PF29774/48_1682340343678.jpg"
},
{
"main_photo": false,
"sequence": 44,
"url": "https://static.portadafrente.com/PF29774/50_1682340343678.jpg"
},
{
"main_photo": false,
"sequence": 45,
"url": "https://static.portadafrente.com/PF29774/43_1682340343684.jpg"
},
{
"main_photo": false,
"sequence": 46,
"url": "https://static.portadafrente.com/PF29774/46_1682340343679.jpg"
},
{
"main_photo": false,
"sequence": 47,
"url": "https://static.portadafrente.com/PF29774/41_1682340343684.jpg"
},
{
"main_photo": false,
"sequence": 48,
"url": "https://static.portadafrente.com/PF29774/38_1682340343690.jpg"
},
{
"main_photo": false,
"sequence": 49,
"url": "https://static.portadafrente.com/PF29774/45_1682340343680.jpg"
},
{
"main_photo": true,
"sequence": 50,
"url": "https://static.portadafrente.com/PF29774/44_1682340343681.jpg"
},
{
"main_photo": false,
"sequence": 51,
"url": "https://static.portadafrente.com/PF29774/01_1682344723445.jpg"
},
{
"main_photo": false,
"sequence": 52,
"url": "https://static.portadafrente.com/PF29774/02_1682344723446.jpg"
},
{
"main_photo": false,
"sequence": 53,
"url": "https://static.portadafrente.com/PF29774/03_1682344723446.jpg"
},
{
"main_photo": false,
"sequence": 54,
"url": "https://static.portadafrente.com/PF29774/04_1682344723446.jpg"
},
{
"main_photo": false,
"sequence": 55,
"url": "https://static.portadafrente.com/PF29774/05_1682344723447.jpg"
},
{
"main_photo": false,
"sequence": 56,
"url": "https://static.portadafrente.com/PF29774/06_1682344723447.jpg"
}
],
"postal_code": "2975-666",
"price": 3200000,
"price_on_application": false,
"published_at": "2023-03-02",
"rooms": 5,
"slug_url": "moradia-t5-sesimbra-venda-a0c3Y00000WkouQQAR",
"slug_url_en": "5-bedroom-house-sesimbra-sale-a0c3Y00000WkouQQAR",
"slug_url_fr": "maison-normal-6-pieces-sesimbra-vente-a0c3Y00000WkouQQAR",
"state_id": "used",
"surroundings": [
"Campo de Golfe",
"Condomínio Fechado",
"Espaços Verdes"
],
"surroundings_en": [
"Golf course",
"Closed condominium",
"Green spaces"
],
"surroundings_fr": [
"Terrain de golf",
"Copropriété fermée",
"Espaces verts"
],
"title": "Moradia T5, Sesimbra",
"title_en": "5 Bedroom House, Sesimbra",
"title_fr": "Maison normal 6 pièces, Sesimbra",
"zone": "Quinta do Peru",
"zone_id": "sesimbra-quinta-do-peru"
},
"highlight": {},
"highlights": [],
"text_match": 100,
"text_match_info": {
"best_field_score": "0",
"best_field_weight": 12,
"fields_matched": 4,
"num_tokens_dropped": 1,
"score": "100",
"tokens_matched": 0,
"typo_prefix_score": 255
}
}
{
"document": {
"address": "R. 8 de Dezembro de 1729",
"availability_ids": "reservado-visivel-no-site",
"bathrooms": 5,
"business_type_id": "sale",
"category_id": "apartment",
"category_name": "Apartamento",
"category_name_en": "Apartment",
"category_name_fr": "Appartement",
"code": "PF30939",
"county": "Oeiras",
"county_id": "oeiras",
"cover_photo": "https://static.portadafrente.com/PF30902/15_1687251470624.jpg",
"description": "O novo projeto Oeiras Golf nasce numa localização em crescimento e valorização, junto ao campo de golfe de Oeiras e próximo a vários parques empresariais e espaços comerciais de referência. O empreendimento conta com 22 unidades de tipologias T2 a T4, com áreas entre os 102 e 196 m2 e áreas exteriores bastante generosas com varandas amplas. Os interiores são amplos e funcionais, com todos os quartos em suite e acabamentos de qualidade de topo. A pensar na sustentabilidade e mobilidade, o estacionamento é em box e contempla carregador para veículos elétricos. O Oeiras Golf situa-se a poucos minutos do TagusPark, com uma vasta oferta de serviços, empresas e todo o tipo de transportes e acessos. Caracterizada pelo clima ameno, Oeiras é um dos concelhos mais desenvolvidos do país, encontrando-se numa localização privilegiada a poucos minutos de Lisboa e Cascais e com vistas soberbas sobre o rio e mar. Os edifícios recuperados e cheios de charme coabitam em equilíbrio perfeito com as novas construções. O Passeio Marítimo, por sua vez, dá acesso às fantásticas praias da linha.",
"description_en": "The new Oeiras Golf project is born in a growing and growing location, next to the Oeiras golf course and close to several business parks and commercial spaces of reference.\r\n\r\nThe development has 22 units of typologies T2 to T4, with areas between 102 and 196 m2 and very generous outdoor areas with large balconies. The interiors are spacious and functional, with all rooms en-suite and top-quality finishes.\r\n\r\nWith sustainability and mobility in mind, the parking lot is in a box and includes a charger for electric vehicles.\r\n\r\nOeiras Golf is located just a few minutes from TagusPark, with a wide range of services, companies and all types of transport and access.\r\n\r\nCharacterized by a mild climate, Oeiras is one of the most developed municipalities in the country, being in a privileged location just minutes from Lisbon and Cascais and with superb views over the river and sea. The restored and charming buildings coexist in perfect balance with the new constructions. The promenade, in turn, gives access to the fantastic coastal beaches.",
"description_fr": "Le nouveau projet Oeiras Golf est né dans un lieu en pleine croissance, à côté du terrain de golf d'Oeiras et à proximité de plusieurs parcs d'activités et espaces commerciaux de référence.\r\n\r\nLe développement compte 22 unités de typologies 3 à 5 pièces, avec des surfaces comprises entre 102 et 196 m2 et des espaces extérieurs très généreux avec de grands balcons. Les intérieurs sont spacieux et fonctionnels, avec toutes les chambres en suite et des finitions de qualité supérieure.\r\n\r\nDans un souci de durabilité et de mobilité, le parking est dans un box et comprend un chargeur pour les véhicules électriques.\r\n\r\nOeiras Golf est situé à quelques minutes de TagusPark, avec une large gamme de services, d'entreprises et de tous types de transports et d'accès.\r\n\r\nCaractérisée par un climat doux, Oeiras est l'une des municipalités les plus développées du pays, étant dans un emplacement privilégié à quelques minutes de Lisbonne et de Cascais et avec de superbes vues sur le fleuve et la mer. Les bâtiments restaurés et charmants coexistent en parfait équilibre avec les nouvelles constructions. Le Passeio Marítimo, à son tour, donne accès aux fantastiques plages de la ligne.",
"equipments": [
"Ar Condicionado",
"Cozinha Equipada",
"Elevador",
"Exaustor",
"Fogão",
"Forno",
"Frigorífico",
"Garagem",
"Ginásio",
"Isolamento Acústico",
"Isolamento Térmico",
"Jardim",
"Máquina de Lavar Louça",
"Máquina de Lavar Roupa",
"Máquina de Secar Roupa",
"Poliban",
"Porta Alta Segurança",
"Roupeiros",
"Painéis Solares",
"Terraço",
"Video Porteiro",
"Vidros Duplos",
"Microondas",
"Sala de Condomínio",
"Varanda"
],
"equipments_en": [
"Air Conditioning",
"Equipped kitchen",
"Elevator",
"Exhaust",
"Stove",
"Oven",
"Fridge",
"Garage",
"Gym",
"Acoustic Insulation",
"Thermal Insulation",
"Garden",
"Dishwasher",
"Washing Machine",
"Drier machine",
"Shower",
"High Security Door",
"Wardrobes",
"Solar panels",
"Terrace",
"Video Doorman",
"Double Glazed",
"Microwave Oven",
"Condominium Room",
"Balcony"
],
"equipments_fr": [
"Climatisation",
"Cuisine équipée",
"Ascenseur",
"Échappement",
"Le fourneau",
"Four",
"Frigo",
"Garage",
"Gym",
"Isolation sonore",
"Isolation thermique",
"Jardin",
"Lave-vaisselle",
"Machine à laver",
"Machine sécheuse",
"Douche",
"Porte haute sécurité",
"Armoires",
"Panneaux solaires",
"Terrasse",
"Portier vidéo",
"Double vitrage",
"Micro-ondes",
"Salle de condominium",
"Balcon"
],
"floor": 4,
"fraction": "4D",
"gross_private_area": 196.8,
"id": "a0c3Y00000WzNOPQA3",
"is_exclusive": true,
"land_area": 0,
"languages": [
"pt"
],
"last_updated": "2024-12-19T20:13:04.592Z",
"latitude": 38.7445074,
"longitude": -9.2902326,
"outdoor_area": 107.06,
"parent_property_id": "a0c3Y00000WzMy1QAF",
"parish": "Barcarena",
"parish_id": "oeiras-barcarena",
"parking_spaces": 3,
"photos": [
{
"main_photo": false,
"sequence": 1,
"url": "https://static.portadafrente.com/PF30902/Edificio%202_1687251470615.jpeg"
},
{
"main_photo": false,
"sequence": 2,
"url": "https://static.portadafrente.com/PF30902/Edificio%209_1687251470618.jpeg"
},
{
"main_photo": false,
"sequence": 3,
"url": "https://static.portadafrente.com/PF30902/Edificio%206_1687251470617.jpeg"
},
{
"main_photo": true,
"sequence": 4,
"url": "https://static.portadafrente.com/PF30902/15_1687251470624.jpg"
},
{
"main_photo": false,
"sequence": 5,
"url": "https://static.portadafrente.com/PF30902/Sala2_1687251470619.jpeg"
},
{
"main_photo": false,
"sequence": 6,
"url": "https://static.portadafrente.com/PF30902/Sala1_1687251470619.jpeg"
},
{
"main_photo": false,
"sequence": 7,
"url": "https://static.portadafrente.com/PF30902/Cozinha%201_1687251470625.jpeg"
},
{
"main_photo": false,
"sequence": 8,
"url": "https://static.portadafrente.com/PF30902/Sala3_1687251470620.jpeg"
},
{
"main_photo": false,
"sequence": 9,
"url": "https://static.portadafrente.com/PF30902/Suite1_1687251470621.jpeg"
},
{
"main_photo": false,
"sequence": 10,
"url": "https://static.portadafrente.com/PF30902/Suite2_1687251470622.jpeg"
},
{
"main_photo": false,
"sequence": 11,
"url": "https://static.portadafrente.com/PF30902/14_1687251470624.jpg"
},
{
"main_photo": false,
"sequence": 12,
"url": "https://static.portadafrente.com/PF30902/10_1687251470623.jpg"
},
{
"main_photo": false,
"sequence": 13,
"url": "https://static.portadafrente.com/PF30902/18_1687251470625.jpg"
},
{
"main_photo": false,
"sequence": 14,
"url": "https://static.portadafrente.com/PF30902/Cozinha%202_1687251470626.jpeg"
},
{
"main_photo": false,
"sequence": 15,
"url": "https://static.portadafrente.com/PF30902/Cozinha%203_1687251470626.jpeg"
},
{
"main_photo": false,
"sequence": 16,
"url": "https://static.portadafrente.com/PF30902/Edificio%203_1687251470616.jpeg"
},
{
"main_photo": false,
"sequence": 17,
"url": "https://static.portadafrente.com/PF30902/Edificio%204_1687251470616.jpeg"
},
{
"main_photo": false,
"sequence": 18,
"url": "https://static.portadafrente.com/PF30902/Edificio%205_1687251470616.jpeg"
},
{
"main_photo": false,
"sequence": 19,
"url": "https://static.portadafrente.com/PF30902/Edificio%207_1687251470617.jpeg"
},
{
"main_photo": false,
"sequence": 20,
"url": "https://static.portadafrente.com/PF30902/Edificio%2010_1687251470618.jpeg"
},
{
"main_photo": false,
"sequence": 21,
"url": "https://static.portadafrente.com/PF30902/Edificio%2011_1687251470619.jpeg"
},
{
"main_photo": false,
"sequence": 22,
"url": "https://static.portadafrente.com/PF30902/Edificio%201_1687251470627.jpeg"
},
{
"main_photo": false,
"sequence": 23,
"url": "https://static.portadafrente.com/PF30902/Edificio%208_1687251470618.jpeg"
}
],
"plan_url": "https://portadafrente.my.salesforce.com/sfc/p/1t000000D6v6/a/3Y000003ChDX/sE58TPfwjt0I1Wfw762HsAEkM_3LE06QerEB67aKZaE",
"postal_code": "2730-28",
"price": 937300,
"price_on_application": false,
"published_at": "2023-06-20",
"rooms": 4,
"slug_url": "apartamento-t4-oeiras-venda-a0c3Y00000WzNOPQA3",
"slug_url_en": "4-bedroom-apartment-oeiras-sale-a0c3Y00000WzNOPQA3",
"slug_url_fr": "appartement-5-pieces-oeiras-vente-a0c3Y00000WzNOPQA3",
"state_id": "under-construction",
"surroundings": [
"Aeroporto",
"Áreas de Lazer Infantil",
"Auto-Estrada",
"Banco",
"Bombeiros",
"Campo de Golfe",
"Centro Comercial",
"Escola",
"Espaços Verdes",
"Farmácia",
"Ginásio",
"Hipermercado",
"Hospital",
"Orientação Solar Nascente",
"Orientação Solar Norte",
"Orientação Solar Poente",
"Orientação Solar Sul",
"Posto de Combustível",
"Vista para Campo",
"Zona Comercial"
],
"surroundings_en": [
"Airport",
"Children's play areas",
"Freeway",
"Bank",
"Fire department",
"Golf course",
"Shopping center",
"School",
"Green spaces",
"Pharmacy",
"Gym",
"Hypermarket",
"Hospital",
"Rising Solar Orientation",
"Solar Orientation North",
"Solar Orientation West",
"Solar Orientation South",
"Gas station",
"View to Countryside",
"Commercial Area"
],
"surroundings_fr": [
"Aéroport",
"Aires de jeux pour enfants",
"Autoroute",
"Banque",
"Pompiers",
"Terrain de golf",
"Centre commercial",
"École",
"Espaces verts",
"Pharmacie",
"Gym",
"grande surface",
"Hôpital",
"Orientation solaire croissante",
"Orientation solaire Nord",
"Orientation solaire Ouest",
"Orientation solaire Sud",
"Station-essence",
"Vue sur la campagne",
"Zone commerciale"
],
"title": "Apartamento T4, Oeiras",
"title_en": "4 Bedroom Apartment, Oeiras",
"title_fr": "Appartement 5 pièces, Oeiras",
"zone": "Oeiras Golf Residence",
"zone_id": "oeiras-oeiras-golf-residence"
},
"highlight": {},
"highlights": [],
"text_match": 100,
"text_match_info": {
"best_field_score": "0",
"best_field_weight": 12,
"fields_matched": 4,
"num_tokens_dropped": 1,
"score": "100",
"tokens_matched": 0,
"typo_prefix_score": 255
}
}
{
"document": {
"address": "Élou | Rua Mário Eloy Pereira",
"availability_ids": "reservado-visivel-no-site",
"bathrooms": 2,
"business_type_id": "sale",
"category_id": "apartment",
"category_name": "Apartamento",
"category_name_en": "Apartment",
"category_name_fr": "Appartement",
"code": "PF33452",
"county": "Loures",
"county_id": "loures",
"cover_photo": "https://static.portadafrente.com/PF33372/06_P7_T5_Sala_1713882142872.jpg",
"description": "O ÉLOU é um sonho para quem adora viver a cidade, mas não prescinde do sossego de uma casa às portas de Lisboa. Localizado em Santo António dos Cavaleiros, em Loures, fica a poucos minutos da capital, com acessos rodoviários, transportes públicos, métro, escolas, ginásios, serviços de saúde, e comércio. • Interiores Amplos e Agradáveis Varandas • Cozinha Equipada • Piscina • Ginásio • Sala Multiusos • Lobby Decorado • Zonas Verdes e de Lazer • Bons Acessos ao Centro da Cidade • Estacionamento Privativo • Sustentabilidade e Eficiência Energética • Mobilidade Elétrica Com acesso direto ao centro de Lisboa e qualquer parte do país, através da proximidade às autoestradas A1 e A8 (Lisboa-Porto), A9 e A16 (Oeste), o ÉLOU fica também a menos de 10 km do aeroporto e da ponte Vasco da Gama. Conta igualmente com uma rede de transportes públicos, que inclui autocarros e metro, potenciando uma vida mais amiga do ambiente. A nova paragem de metro “Torres da Bela Vista”, que fará ligação direta a Odivelas e qualquer ponto da capital, ficará a poucos minutos a pé do condomínio. • 18 minutos | De carro até ao centro de lisboa. • 10 minutos | De carro até ao aeroporto e à Ponte Vasco da Gama. Com projeto desenvolvido e desenhado pela equipa liderada pela Arquiteta Cristina Rocheta, da SOLYD Property Developers este novo condomínio fechado conta com apartamentos, de tipologias T1 a T5, com áreas compreendidas entre os 49 e os 149 m2 e varandas e terraços com áreas até aos 137 m2, o ÉLOU oferece modernos apartamentos com excelentes acabamentos. Com estacionamento subterrâneo privativo, que se encontram num ponto comum - a vasta zona de lazer privativa. Neste espaço exterior, com relvados e uma piscina, o descanso e a tranquilidade são os grandes anfitriões, convidando-o a desfrutar com a família e os amigos. Para além disso, o projeto oferece lobby decorado, ginásio totalmente equipado e sala multiusos dos quais pode desfrutar nos seus tempos livres. Os elevados padrões de qualidade estendem-se aos revestimentos de parede, carpintarias lacadas, porta de alta segurança, pavimentos, ar condicionado com alta eficiência energética e roupeiros embutidos. As cozinhas são totalmente equipadas com eletrodomésticos de topo e móveis de grande capacidade de arrumação. Já as casas de banho incluem louças e torneiras de marcas de referência. Este projeto tem na sua génese a sustentabilidade e, por isso, a diminuição do impacto ambiental é uma prioridade. No ÉLOU garantimos que cada escolha respeita também o equilíbrio do planeta, promovendo a eficiência energética e optando por materiais sustentáveis e recicláveis.",
"description_en": "ÉLOU is a dream for those who love living in the city but can't do without the peace and quiet of a house on Lisbon's doorstep. Located in Santo António dos Cavaleiros, in Loures, it's just a few minutes from the capital, with easy access to roads, public transport, the metro, schools, gyms, health services and shops.\r\n\r\n- Spacious interiors and pleasant balconies\r\n- Equipped kitchen\r\n- Swimming pool\r\n- Gym\r\n- Multipurpose Room\r\n- Decorated Lobby\r\n- Green and leisure areas\r\n- Good access to the city center\r\n- Private parking\r\n- Sustainability and Energy Efficiency\r\n- Electric Mobility\r\n\r\nWith direct access to the center of Lisbon and anywhere in the country, due to its proximity to the A1 and A8 (Lisbon-Oporto), A9 and A16 (West) highways, ÉLOU is also less than 10 km from the airport and the Vasco da Gama bridge.\r\n\r\nIt also has a public transport network, including buses and the metro, making life more environmentally friendly. The new \"Torres da Bela Vista\" metro stop, which connects directly to Odivelas and anywhere in the capital, is just a few minutes' walk from the condominium.\r\n\r\n- 18 minutes | by car to the center of Lisbon.\r\n- 10 minutes | by car to the airport and the Vasco da Gama Bridge.\r\n\r\nWith a project developed and designed by the team led by architect Cristina Rocheta, from SOLYD Property Developers, this new gated community has apartments of types T1 to T5, with areas between 49 and 149 m2 and balconies and terraces with areas up to 137 m2, ÉLOU offers modern apartments with excellent finishes.\r\n\r\nWith private underground parking, they meet at a common point - the vast private leisure area. In this outdoor space, with lawns and a swimming pool, relaxation and tranquillity are the great hosts, inviting you to enjoy it with family and friends. In addition, the project offers a decorated lobby, a fully equipped gym and a multipurpose room which you can enjoy in your free time.\r\n\r\nThe high quality standards extend to the wall coverings, lacquered carpentry, high-security doors, flooring, energy-efficient air conditioning and built-in closets.\r\nThe kitchens are fully equipped with top-of-the-range appliances and plenty of storage space. The bathrooms, on the other hand, feature top brand vitreous china and taps.\r\n\r\nThis project has sustainability at its core, which is why reducing environmental impact is a priority. At ÉLOU we ensure that every choice also respects the balance of the planet, promoting energy efficiency and opting for sustainable and recyclable materials.\r\n\r\nPorta da Frente Christie’s is a real estate agency that has been operating in the market for more than two decades. Its focus lays on the highest quality houses and developments, not only in the selling market, but also in the renting market. The company was elected by the prestigious brand Christie’s International Real Estate to represent Portugal in the areas of Lisbon, Cascais, Oeiras and Alentejo. The main purpose of Porta da Frente Christie’s is to offer a top-notch service to our customers.",
"description_fr": "ÉLOU est un rêve pour ceux qui aiment vivre en ville, mais ne peuvent se passer du calme et de la tranquillité d'un logement aux portes de Lisbonne. Situé à Santo António dos Cavaleiros, à Loures, il se trouve à quelques minutes de la capitale, desservi par un accès routier, des transports en commun, dont le métro, des établissements d’enseignement, des clubs de sport, des services de santé et des commerces. \r\n\r\n• Balcons intérieurs spacieux et agréables \r\n• Cuisine équipée \r\n• Piscine \r\n• Salle de sport \r\n• Salle polyvalente \r\n• Hall décoré \r\n• Espaces verts et de loisirs \r\n• Bon accès au centre-ville • Parking privé \r\n• Durabilité et performance énergétique \r\n• Mobilité électrique \r\n\r\nAvec un accès direct au centre de Lisbonne et à n'importe quelle partie du pays, de par sa proximité avec les autoroutes A1 et A8 (Lisbonne-Porto), A9 et A16 (Ouest), ÉLOU est également à moins de 10 km de l'aéroport et du pont Vasco da Gama. \r\n\r\nDisposant encore d'un réseau de transports en commun, y compris des bus et le métro, favorisant une vie plus respectueuse de l'environnement. \r\nLa nouvelle station de métro « Torres da Bela Vista » offrira un accès direct à Odivelas et n'importe quel point de la capitale, à seulement quelques minutes à pied du bâtiment\r\n\r\n• 18 minutes | en voiture jusqu'au centre de Lisbonne\r\n• 10 minutes | en voiture jusqu'à l'aéroport et au pont Vasco da Gama. \r\n\r\nAvec un projet développé et conçu par l'équipe dirigée par l'architecte Cristina Rocheta, de SOLYD Property Developers, ce nouveau bâtiment en copropriété sécurisé comprend des appartements allant des 2 pièces aux 6 pièces et des surfaces allant des 49 m2 et 149 m2, avec des balcons et des terrasses allant jusqu'à 137 m2. ÉLOU propose des appartements modernes avec d'excellents matériaux et équipements. Avec un stationnement souterrain et un espace commun extérieur - un vaste espace de loisirs privé. Dans cet espace extérieur, avec une pelouse et une piscine, le repos et la tranquillité sont les mots-clefs, vous invitant à en profiter en famille et entre amis. De plus, le projet offre un hall décoré, une salle de sport entièrement équipée et une salle polyvalente. Vous pouvez en profiter pendant votre temps libre. Les normes de qualité élevées s'étendent aux revêtements muraux, à la menuiserie laquée, aux portes de haute sécurité, aux sols, à la climatisation à haute performance énergétique et aux placards. Les cuisines sont entièrement équipées d'appareils électroménagers haut de gamme et d’armoires permettant de tout ranger. Les salles de bains comprennent des équipements et des robinetteries de grandes marques. \r\n\r\nCe projet est axé sur la durabilité. Par conséquent, la réduction de l’impact environnemental est une priorité. Dans le bâtiment ÉLOU, nous garantissons que chaque choix respecte aussi l'équilibre de la planète, en favorisant la performance énergétique et en optant pour des matériaux durables et recyclables.\r\n\r\nPorta da Frente Christie's est une agence immobilière qui opère sur le marché depuis plus de deux décennies, se concentrant sur les meilleurs biens immobiliers, complexes résidentiels et ensembles immobiliers, au niveau de la vente et de la location. L'agence a été sélectionnée par la prestigieuse marque Christie's International Real Estate pour la représenter au Portugal, dans les régions de Lisbonne, Cascais, Oeiras et Alentejo. La mission principale de Porta da Frente Christie's est d'assurer un service d'excellence à tous ses clients.",
"equipments": [
"Acesso para Deficientes",
"Ar Condicionado",
"Blackouts",
"Cozinha Equipada",
"Domótica",
"Elevador",
"Estores Electricos",
"Exaustor",
"Forno",
"Frigorífico",
"Garagem",
"Ginásio",
"Isolamento Acústico",
"Isolamento Térmico",
"Jardim",
"Máquina de Lavar Louça",
"Máquina de Lavar Roupa",
"Máquina de Secar Roupa",
"Piscina Comum",
"Placa Vitrocerâmica",
"Porta Alta Segurança",
"Portão Eléctrico",
"Roupeiros",
"Terraço",
"Video Porteiro",
"Vidros Duplos",
"Microondas",
"Sala de Condomínio",
"Varanda"
],
"equipments_en": [
"Disabled People Access",
"Air Conditioning",
"Blackouts",
"Equipped kitchen",
"Home automation",
"Elevator",
"Electric blinds",
"Exhaust",
"Oven",
"Fridge",
"Garage",
"Gym",
"Acoustic Insulation",
"Thermal Insulation",
"Garden",
"Dishwasher",
"Washing Machine",
"Drier machine",
"Shared Swimming Pool",
"Vitroceramic Cooktop",
"High Security Door",
"Electric gate",
"Wardrobes",
"Terrace",
"Video Doorman",
"Double Glazed",
"Microwave Oven",
"Condominium Room",
"Balcony"
],
"equipments_fr": [
"Accès mobilité réduite",
"Climatisation",
"Coupures de courant",
"Cuisine équipée",
"Automatisation de la maison",
"Ascenseur",
"Stores électriques",
"Échappement",
"Four",
"Frigo",
"Garage",
"Gym",
"Isolation sonore",
"Isolation thermique",
"Jardin",
"Lave-vaisselle",
"Machine à laver",
"Machine sécheuse",
"Piscine partagée",
"Table de cuisson vitrocéramique",
"Porte haute sécurité",
"Portail électrique",
"Armoires",
"Terrasse",
"Portier vidéo",
"Double vitrage",
"Micro-ondes",
"Salle de condominium",
"Balcon"
],
"floor": 5,
"fraction": "D1.5B",
"gross_private_area": 64,
"id": "a0cTg000001fvjJIAQ",
"is_exclusive": true,
"land_area": 0,
"languages": [
"pt"
],
"last_updated": "2024-12-19T20:12:47.996Z",
"outdoor_area": 26,
"parent_property_id": "a0cTg000001Yg14IAC",
"parish": "Loures",
"parish_id": "loures-loures",
"parking_spaces": 1,
"photos": [
{
"main_photo": true,
"sequence": 1,
"url": "https://static.portadafrente.com/PF33372/06_P7_T5_Sala_1713882142872.jpg"
},
{
"main_photo": false,
"sequence": 2,
"url": "https://static.portadafrente.com/PF33372/02_P3_T3_Cozinha_1713882142870.jpg"
},
{
"main_photo": false,
"sequence": 3,
"url": "https://static.portadafrente.com/PF33372/13_P0_Terra%C3%A7o_1713882142875.jpg"
},
{
"main_photo": false,
"sequence": 4,
"url": "https://static.portadafrente.com/PF33372/08_P7_T5_SUITE_05_1713882142872.jpg"
},
{
"main_photo": false,
"sequence": 5,
"url": "https://static.portadafrente.com/PF33372/07_P3_T3_Suite_1713882142872.jpg"
},
{
"main_photo": false,
"sequence": 6,
"url": "https://static.portadafrente.com/PF33372/01_P6_T3_Is_1713882142869.jpg"
},
{
"main_photo": false,
"sequence": 7,
"url": "https://static.portadafrente.com/PF33372/17_ext_02_1713882142867.jpg"
},
{
"main_photo": false,
"sequence": 8,
"url": "https://static.portadafrente.com/PF33372/14_Pool_1713882142875.jpg"
},
{
"main_photo": false,
"sequence": 9,
"url": "https://static.portadafrente.com/PF33372/15_EXT_CAM1_1713882142876.jpg"
},
{
"main_photo": false,
"sequence": 10,
"url": "https://static.portadafrente.com/PF33372/16_Varanda_1713882142877.jpg"
},
{
"main_photo": false,
"sequence": 11,
"url": "https://static.portadafrente.com/PF33372/18_P7_T2_Terraco_02_1713882142868.jpg"
},
{
"main_photo": false,
"sequence": 12,
"url": "https://static.portadafrente.com/PF33372/03_P6_T4_Sala_Cozinha_1713882142870.jpg"
},
{
"main_photo": false,
"sequence": 13,
"url": "https://static.portadafrente.com/PF33372/05_P0_Sala_02_1713882142871.jpg"
},
{
"main_photo": false,
"sequence": 14,
"url": "https://static.portadafrente.com/PF33372/09_P7_T4_SUITE_02_1713882142873.jpg"
},
{
"main_photo": false,
"sequence": 15,
"url": "https://static.portadafrente.com/PF33372/11_P0_Gin%C3%A1sio_1713882142874.jpg"
},
{
"main_photo": false,
"sequence": 16,
"url": "https://static.portadafrente.com/PF33372/10_Atrio_1713882142873.jpg"
},
{
"main_photo": false,
"sequence": 17,
"url": "https://static.portadafrente.com/PF33372/19_Garagem_1713882142869.jpg"
}
],
"plan_url": "https://portadafrente.my.salesforce.com/sfc/p/1t000000D6v6/a/Tg000000DaC9/hWBcHOQKfxT16Cz9Xh92nWbSWOn0JEY1R2w3fklNTuI",
"postal_code": "2660-698",
"price": 330000,
"price_on_application": false,
"published_at": "2024-04-30",
"rooms": 1,
"slug_url": "apartamento-t1-loures-venda-a0cTg000001fvjJIAQ",
"slug_url_en": "1-bedroom-apartment-loures-sale-a0cTg000001fvjJIAQ",
"slug_url_fr": "appartement-2-pieces-loures-vente-a0cTg000001fvjJIAQ",
"state_id": "under-construction",
"surroundings": [
"Aeroporto",
"Áreas de Lazer Infantil",
"Auto-Estrada",
"Centro Comercial",
"Centro da Cidade",
"Condomínio Fechado",
"Escola",
"Espaços Verdes",
"Farmácia",
"Ginásio",
"Hipermercado",
"Hospital",
"Orientação Solar Nascente",
"Orientação Solar Norte",
"Orientação Solar Poente",
"Orientação Solar Sul",
"Piscinas",
"Posto de Combustível",
"Transportes Públicos",
"Vista para Cidade",
"Vista para Jardim",
"Vista para Montanha",
"Zona Comercial",
"Estacionamento"
],
"surroundings_en": [
"Airport",
"Children's play areas",
"Freeway",
"Shopping center",
"Town centre",
"Closed condominium",
"School",
"Green spaces",
"Pharmacy",
"Gym",
"Hypermarket",
"Hospital",
"Rising Solar Orientation",
"Solar Orientation North",
"Solar Orientation West",
"Solar Orientation South",
"Pools",
"Gas station",
"Public Transportation",
"City View",
"Garden View",
"Mountain View",
"Commercial Area",
"Parking"
],
"surroundings_fr": [
"Aéroport",
"Aires de jeux pour enfants",
"Autoroute",
"Centre commercial",
"Centre-ville",
"Copropriété fermée",
"École",
"Espaces verts",
"Pharmacie",
"Gym",
"grande surface",
"Hôpital",
"Orientation solaire croissante",
"Orientation solaire Nord",
"Orientation solaire Ouest",
"Orientation solaire Sud",
"Piscines",
"Station-essence",
"Transport public",
"Vue de la ville",
"Vue du jardin",
"Vue sur la montagne",
"Zone commerciale",
"Parking"
],
"title": "Apartamento T1, Loures",
"title_en": "1 Bedroom Apartment, Loures",
"title_fr": "Appartement 2 pièces, Loures",
"zone": "Loures",
"zone_id": "loures-loures"
},
"highlight": {},
"highlights": [],
"text_match": 100,
"text_match_info": {
"best_field_score": "0",
"best_field_weight": 12,
"fields_matched": 4,
"num_tokens_dropped": 1,
"score": "100",
"tokens_matched": 0,
"typo_prefix_score": 255
}
}
{
"document": {
"address": "Rua Carlos Lopes, lote 7 - 1º C Lombos Sul",
"availability_ids": "disponivel",
"bathrooms": 2,
"business_type_id": "sale",
"category_id": "apartment",
"category_name": "Apartamento",
"category_name_en": "Apartment",
"category_name_fr": "Appartement",
"code": "PF32137",
"county": "Cascais",
"county_id": "cascais",
"cover_photo": "https://static.portadafrente.com/PF32007/foto1_1701952836183.JPG",
"description": "T2 no empreendimento Varandas da Torre, com 115,30m2 + 47,20m2 de terraço privativo. Este empreendimento ainda em construção, compõe-se na sua totalidade por quatro edifícios, modernos e bem iluminados, com uma localização privilegiada e de elevados padrões de qualidade. Muito próximo das praias da linha de Cascais, com ótimos acessos, pela Av. Marginal, A5 e bem servida por transportes púbicos. Em área habitacional, com espaços comerciais variados, escolas e universidades e muito mais. A primeira fase já concluída e habitada, esta segunda corresponde a 2 lotes 7 e 8 com 28 apartamentos no total de tipologia T1 a T4. Este apartamento distribui-se da seguinte forma: - hall entrada - casa de banho completa (social e apoiar o segundo quarto) - sala com acesso a simpática varanda a poente com 12,20m2 - cozinha totalmente equipada - suíte com ampla casa de banho e zona de vestir - quarto amplo com roupeiros Ambos os quartos de acesso ao terraço privado com 32,60m2 Com excelente exposição solar (Nascente/poente) A conclusão da obra está prevista para Julho de 2024 - Com Garagem box com 37,10m2 Carcavelos faz parte do concelho de Cascais e é uma zona privilegiada afamada pela famosa praia de Carcavelos com um extenso areal e pela prática de inúmeros desportos como surf. Esta localização, caracteriza-se pelas sua proximidade a Lisboa e pelas suas facilidades de acesso (autoestrada e transportes públicos). Também é um importante polo de educação, pois estão aqui instalados dois campus da Universidade Nova de Lisboa: a NOVA School of Business and Economics e a NOVA Medical School. A Porta da Frente Christie’s é uma empresa de mediação imobiliária que trabalha no mercado há mais de duas décadas, focando-se nos melhores imóveis e empreendimentos, quer para venda quer para arrendamento. A empresa foi selecionada pela prestigiada marca Christie’s International Real Estate para representar Portugal, nas zonas de Lisboa, Cascais, Oeiras e Alentejo. A principal missão da Porta da Frente Christie’s é privilegiar um serviço de excelência a todos os nossos clientes.",
"description_en": "2 bedroom apartment in the development Varandas da Torre, with 115,30 sqm + a 47,20 sqm private terrace. \r\nThis development, still under construction, is composed in its entirety by four buildings, modern and well lit, with a privileged location and the highest quality standards. Very close to the beaches of the Cascais line, with great accesses, via Marginal, the A5 motorway and well served by public transportation. In a housing area, with several commercial spaces, schools and universities, among others.\r\nThe first phase is already completed and inhabited, this second phase corresponds to 2 lots (7 and 8) with 28 apartments in total with typologies that differ from 1 bedroom apartments to 4 bedroom apartments.\r\n\r\nThis apartment is distributed as follows: \r\n- entry hall\r\n- full private bathroom (social and to support the second bedroom)\r\n- living room with access to a pleasant 12,20 sqm balcony facing West\r\n- fully equipped kitchen\r\n- suite with an ample bathroom and a dressing area\r\n- ample bedroom with wardrobes\r\nBoth bedrooms have access to a 32,60 sqm private terrace\r\nWith an excellent sun exposure (East/west). \r\nThe completion of the work is predicted for July 2024. \r\n- With a 37,10 sqm box garage \r\n\r\nCarcavelos is part of the municipality of Cascais and it is a privileged area, popular for the famous beach of Carcavelos, with extensive sand and the practice of numerous sports such as surfing. This location is characterized by its proximity to Lisbon and its access facilities (motorway and public transportation). It is also an important centre of education, as there are two campuses of the Nova University of Lisbon: the NOVA School of Business and Economics and the NOVA Medical School.\r\n\r\nPorta da Frente Christie’s is a real estate agency that has been operating in the market for more than two decades. Its focus lays on the highest quality houses and developments, not only in the selling market, but also in the renting market. The company was elected by the prestigious brand Christie’s – one of the most reputable auctioneers, Art institutions and Real Estate of the world – to be represented in Portugal, in the areas of Lisbon, Cascais, Oeiras, Sintra and Alentejo. The main purpose of Porta da Frente Christie’s is to offer a top-notch service to our customers.",
"description_fr": "Appartement 3 pièces dans le complexe Varandas da Torre. Appartement d’une surface de 115,30 m2 + balcons de 47,20 m2.\r\nCe complexe, en cours de construction, est composé de quatre bâtiments modernes et bien éclairés, à un emplacement privilégié, obéissant à des standards de qualité élevés. Très proche des plages de la côte de Cascais, avec un excellent accès, via la route du bord de mer et l’autoroute A5 et bien desservi par des transports en commun. \r\nDans un quartier résidentiel, avec des espaces commerciaux variés, des établissements d’enseignement et des universités et bien plus encore.\r\nLa première phase est déjà achevée et habitée. Cette deuxième phase correspond aux 2 lots 7 et 8 avec 28 appartements au total, allant des 2 pièces aux 5 pièces.\r\n\r\nCet appartement se compose comme suit : \r\n- hall d'entrée \r\n- salle de bains (commune au salon et à la 2ème chambre)\r\n- salon avec agréable balcon orienté à l’ouest de 12,20 m2\r\n- cuisine entièrement équipée \r\n- suite avec grande salle de bains et coin dressing\r\n- chambre avec placard\r\nLes deux chambres ont une terrasse privative de 32,60 m2\r\nAvec une excellente orientation est/ ouest \r\nLes travaux seront achevés en juillet 2024 \r\n- Avec garage box de 37,10 m2~\r\n\r\nCarcavelos fait partie de la municipalité de Cascais. C’est une région privilégiée, célèbre pour la célèbre plage de Carcavelos avec une vaste étendue de sable et pour la pratique de nombreux sports comme le surf. Cet emplacement se caractérise par sa proximité avec Lisbonne et sa facilité d'accès (autoroute et transports en commun). C'est également un centre éducatif important, puisque deux campus de l'université Nova de Lisboa s'y trouvent : NOVA School of Business and Economics et NOVA Medical School.\r\n\r\nPorta da Frente Christie's est une agence immobilière qui opère sur le marché depuis plus de deux décennies, se concentrant sur les meilleurs biens immobiliers, complexes résidentiels et aménagements, au niveau de la vente et de la location. L'agence a été sélectionnée par la prestigieuse marque Christie's International Real Estate pour la représenter au Portugal, dans les régions de Lisbonne, Cascais, Oeiras et Alentejo. La mission principale de Porta da Frente Christie's est d'assurer un service d'excellence à tous ses clients.",
"equipments": [
"Ar Condicionado",
"Arrecadação",
"Caldeira",
"Cozinha Equipada",
"Elevador",
"Estores Electricos",
"Garagem",
"Gás Canalizado",
"Piso Radiante",
"Roupeiros",
"Video Porteiro",
"Vidros Duplos",
"Carregamento Veículos Eléctricos",
"Varanda"
],
"equipments_en": [
"Air Conditioning",
"Storage Room",
"Hot Water Tank",
"Equipped kitchen",
"Elevator",
"Electric blinds",
"Garage",
"Piped gas",
"Radiant Floor Heating",
"Wardrobes",
"Video Doorman",
"Double Glazed",
"EV charging station",
"Balcony"
],
"equipments_fr": [
"Climatisation",
"Rangement",
"Réservoir d'eau chaude",
"Cuisine équipée",
"Ascenseur",
"Stores électriques",
"Garage",
"Gaz canalisé",
"Chauffage radiant au sol",
"Armoires",
"Portier vidéo",
"Double vitrage",
"Borne de recharge pour voitures électriques",
"Balcon"
],
"floor": 1,
"fraction": "C",
"gross_build_area": 203.8,
"gross_private_area": 115.3,
"id": "a0cTg000000I0xdIAC",
"is_exclusive": false,
"land_area": 0,
"languages": [
"pt"
],
"last_updated": "2024-12-19T20:12:31.553Z",
"outdoor_area": 47.2,
"parent_property_id": "a0cTg000000942oIAA",
"parish": "Carcavelos E Parede",
"parish_id": "cascais-carcavelos-e-parede",
"parking_spaces": 2,
"photos": [
{
"main_photo": false,
"sequence": 1,
"url": "https://static.portadafrente.com/PF32007/foto2_1701952836184.JPG"
},
{
"main_photo": true,
"sequence": 2,
"url": "https://static.portadafrente.com/PF32007/foto1_1701952836183.JPG"
},
{
"main_photo": false,
"sequence": 3,
"url": "https://static.portadafrente.com/PF32007/hall%20varandas%20da%20torre_1701952836186.JPG"
},
{
"main_photo": false,
"sequence": 4,
"url": "https://static.portadafrente.com/PF32007/foto9_1701952836186.JPG"
},
{
"main_photo": false,
"sequence": 5,
"url": "https://static.portadafrente.com/PF32007/foto8_1701952836185.JPG"
},
{
"main_photo": false,
"sequence": 6,
"url": "https://static.portadafrente.com/PF32007/foto5_1701952836185.JPG"
},
{
"main_photo": false,
"sequence": 7,
"url": "https://static.portadafrente.com/PF32007/foto3_1701952836184.JPG"
},
{
"main_photo": false,
"sequence": 8,
"url": "https://static.portadafrente.com/PF32007/foto6_1701952836185.JPG"
},
{
"main_photo": false,
"sequence": 9,
"url": "https://static.portadafrente.com/PF32007/foto7_1701952836185.JPG"
},
{
"main_photo": false,
"sequence": 10,
"url": "https://static.portadafrente.com/PF32007/foto4_1701952836184.JPG"
},
{
"main_photo": false,
"sequence": 11,
"url": "https://static.portadafrente.com/PF32007/foto10_1701952836186.JPG"
}
],
"postal_code": "2775-401",
"price": 755000,
"price_on_application": false,
"published_at": "2023-12-18",
"rooms": 2,
"slug_url": "apartamento-t2-cascais-venda-a0cTg000000I0xdIAC",
"slug_url_en": "2-bedroom-apartment-cascais-sale-a0cTg000000I0xdIAC",
"slug_url_fr": "appartement-3-pieces-cascais-vente-a0cTg000000I0xdIAC",
"state_id": "under-construction",
"surroundings": [
"Áreas de Lazer Infantil",
"Auto-Estrada",
"Centro Comercial",
"Centro da Cidade",
"Escola",
"Espaços Verdes",
"Estação Ferroviária",
"Estação Rodoviária",
"Farmácia",
"Ginásio",
"Hipermercado",
"Praça Táxis",
"Praia",
"Transportes Públicos",
"Vista para Cidade",
"Vista para Jardim",
"Estacionamento"
],
"surroundings_en": [
"Children's play areas",
"Freeway",
"Shopping center",
"Town centre",
"School",
"Green spaces",
"Train station",
"Railway station",
"Pharmacy",
"Gym",
"Hypermarket",
"Taxis Square",
"Beach",
"Public Transportation",
"City View",
"Garden View",
"Parking"
],
"surroundings_fr": [
"Aires de jeux pour enfants",
"Autoroute",
"Centre commercial",
"Centre-ville",
"École",
"Espaces verts",
"Gare",
"Gare",
"Pharmacie",
"Gym",
"grande surface",
"Taxis Square",
"Plage",
"Transport public",
"Vue de la ville",
"Vue du jardin",
"Parking"
],
"title": "Apartamento T2, Cascais",
"title_en": "2 Bedroom Apartment, Cascais",
"title_fr": "Appartement 3 pièces, Cascais",
"zone": "Lombos Sul",
"zone_id": "cascais-lombos-sul"
},
"highlight": {},
"highlights": [],
"text_match": 100,
"text_match_info": {
"best_field_score": "0",
"best_field_weight": 12,
"fields_matched": 4,
"num_tokens_dropped": 1,
"score": "100",
"tokens_matched": 0,
"typo_prefix_score": 255
}
}
{
"document": {
"address": "Hilton Cascais Residences - Rua de Benguela, B428, Parede, Cascais",
"availability_ids": "disponivel",
"bathrooms": 1,
"business_type_id": "sale",
"category_id": "apartment",
"category_name": "Apartamento",
"category_name_en": "Apartment",
"category_name_fr": "Appartement",
"code": "PF33041",
"county": "Cascais",
"county_id": "cascais",
"cover_photo": "https://static.portadafrente.com/PF33027/01_Birdeye_04_1710930542533.jpg",
"description": "Hilton Cascais, onde o mar é presença constante no estilo de vida. Localizado , na primeira linha de mar, com vistas deslumbrantes, o Hilton Cascais é um projeto único, que consegue aliar localização, prestígio e comodidades, com uma excelente oportunidade de investimento. Os apartamentos T1, T2, T3 e T4 estão inseridos num empreendimento com a garantia de qualidade e segurança da marca Hilton, sinónimo mundial de qualidade, luxo e exclusividade. Esta condição privilegiada permite aos seus moradores o acesso a um amplo universo de serviços e comodidades, que fazem com que este projeto seja único. Combinando conforto, design e funcionalidade, todos os apartamentos e penthouses, serão entregues completamente equipados e mobilados, com decoração da Twenty2 Degrees. Composto por dois edifícios, o conjunto possui 3 diferentes receções, duas delas privativas para os residentes. • Quatro Restaurantes e Bar • Centro de Bem-Estar • Ginásio • Espaço de Crianças • Salas de reunião • Piscina Interior • Duas Piscinas Exteriores • Estacionamento • Gestão profissional de todas as instalações O Hilton Cascais possui ainda um programa de rentabilidade para todos os apartamentos, o que faz deste projeto uma excelente oportunidade para quem deseja investir, seja para exploração a tempo integral ou de forma a poder usufruir em períodos determinados. que aliando a força da marca Hilton na hotelaria, faz deste projeto uma excelente oportunidade de investimento imobiliário. Cascais é uma vila portuguesa conhecida pela sua baía de praias, comércio e cosmopolitismo. Considerado o destino mais sofisticado da região de Lisboa, imperam os palacetes e a elegância requintada de todas as construções. Com o mar a seus pés, Cascais pode orgulhar-se de ter 7 campos de golfe, um casino, uma marina e inúmeros espaços de lazer. A 30 minutos de Lisboa e do aeroporto internacional. Carcavelos, com a construção recente da Universidade Nova, trouxe uma nova vida a esta localização, agora potenciada pelo dinamismo jovem e pelas novas oportunidades. A sua proximidade com as praias da linha resulta numa área cada vez mais procurada para habitação. A Porta da Frente Christie’s é uma empresa de mediação imobiliária que trabalha no mercado há mais de duas décadas, focando-se nos melhores imóveis e empreendimentos, quer para venda quer para arrendamento. A empresa foi selecionada pela prestigiada marca Christie’s International Real Estate para representar Portugal, nas zonas de Lisboa, Cascais, Oeiras e Alentejo. A principal missão da Porta da Frente Christie’s é privilegiar um serviço de excelência a todos os nossos clientes.",
"description_en": "Hilton Cascais, where the sea is a constant presence in the lifestyle. \r\n\r\nLocated in the first sea line, with stunning views, the Hilton Cascais is a unique project that combines location, prestige and amenities with an excellent investment opportunity.\r\n\r\nThe T1, T2, T3, and T4 apartments are part of a development with the quality and safety guarantee of the Hilton brand, synonymous with quality, luxury and exclusivity. This privileged condition allows its residents access to a wide universe of services and amenities, which make this project unique.\r\n\r\nBlending comfort, design and functionality, all apartments and penthouses will be delivered fully equipped and furnished, with decor from Twenty2 Degrees.\r\nComposed by two buildings, the set has 3 different receptions, two of them private for the residents. \r\n\r\n• Four Restaurants and Bar\r\n• Wellness centre\r\n• Gym\r\n• Children’s Space\r\n• Meeting rooms\r\n• Indoor swimming pool\r\n• Two Outdoor Pools\r\n• Parking space\r\n• Professional management of all facilities\r\n\r\nHilton Cascais also has a profitability program for all apartments, which makes this project an excellent opportunity for those who want to invest, whether for full-time operation or in order to enjoy it at certain times. Combining the strength of the Hilton brand in hospitality converts this project into an excellent real estate investment opportunity.\r\n\r\nCascais is a Portuguese village famous for its bay, local business and its cosmopolitanism. It is considered the most sophisticated destination of the Lisbon’s region, where small palaces and refined and elegant constructions prevail. With the sea as a scenario, Cascais can be proud of having 7 golf courses, a casino, a marina and countless leisure areas. It is 30 minutes away from Lisbon and its international airport.\r\nCarcavelos, with the recent construction of the Nova University, brought a new life to this location, now enhanced by young dynamism and new opportunities. Its proximity to the beaches of the line results in an area increasingly sought after for housing.\r\n\r\nPorta da Frente Christie’s is a real estate agency that has been operating in the market for more than two decades. Its focus lays on the highest quality houses and developments, not only in the selling market, but also in the renting market. The company was elected by the prestigious brand Christie’s International Real Estate to represent Portugal in the areas of Lisbon, Cascais, Oeiras and Alentejo. The main purpose of Porta da Frente Christie’s is to offer a top-notch service to our customers.",
"description_fr": "Hilton Cascais, où la mer est toujours présente dans votre style de vie. \r\n\r\nSituée en bord de mer, avec une vue imprenable, cette unité Hilton Cascais est un projet unique, qui parvient à combiner emplacement, prestige et équipements, offrant une excellente opportunité d'investissement. \r\n\r\nLes appartements T1, T2, T3 et T4 sont intégrés dans un complexe avec la garantie de qualité et de sécurité de la marque Hilton, synonyme mondial de qualité, de luxe et d'exclusivité. \r\nCette condition privilégiée permet à ses résidents d'accéder à une large gamme de services et d’équipements, qui rendent ce projet unique. \r\n\r\nAlliant confort, design et fonctionnalité, tous les appartements et appartements-terrasse seront livrés entièrement équipés et meublés, avec une décoration signée Twenty2 Degrees. Composé de deux bâtiments, le complexe dispose de 3 réceptions différentes dont deux privées pour les résidents. \r\n\r\n• Quatre restaurants et bar \r\n• Centre de bien-être \r\n• Salle de sport \r\n• Espace enfants \r\n• Salles de réunion \r\n• Piscine intérieure \r\n• Deux piscines extérieures \r\n• Parking \r\n• Gestion professionnelle de toutes les installations \r\n\r\nHilton Cascais dispose également d'un programme de rentabilité pour tous les appartements, ce qui en fait un projet assurant une excellente opportunité pour ceux qui souhaitent investir dans une location tous les mois de l’année ou pour en profiter pendant des périodes précises. Ce programme, combinant la force de la marque Hilton dans le secteur hôtelier, fait de ce projet une excellente opportunité d'investissement immobilier.\r\n\r\nCascais est une petite ville portugaise, connue pour sa baie de plages, son commerce et son cosmopolitisme. Considérée comme la destination la plus sophistiquée de la région de Lisbonne, les demeures et l'élégance raffinée de tous les bâtiments s'imposent. Avec la mer à ses pieds, Cascais peut être fière d'avoir 7 terrains de golf, un casino, une marina et de nombreuses aires de loisirs. À 30 minutes de Lisbonne et de l'aéroport international.\r\n\r\nPorta da Frente Christie's est une agence immobilière qui opère sur le marché depuis plus de deux décennies, se concentrant sur les meilleurs biens immobiliers, complexes résidentiels et ensembles immobiliers, au niveau de la vente et de la location. L'agence a été sélectionnée par la prestigieuse marque Christie's International Real Estate pour la représenter au Portugal, dans les régions de Lisbonne, Cascais, Oeiras et Alentejo. La mission principale de Porta da Frente Christie's est d'assurer un service d'excellence à tous ses clients.",
"equipments": [
"Ar Condicionado",
"Elevador",
"Ginásio",
"Piscina",
"Piscina aquecida",
"Piscina Comum",
"Piscina exterior",
"Piscina interior",
"Piscina Privada",
"Porta Alta Segurança",
"Terraço",
"Video Porteiro",
"Vidros Duplos",
"Spa",
"Portaria",
"Segurança 24 horas"
],
"equipments_en": [
"Air Conditioning",
"Elevator",
"Gym",
"Swimming Pool",
"Heated Swimming Pool",
"Shared Swimming Pool",
"Outdoor Swimming Pool",
"Indoor Swimming Pool",
"Private Swimming Pool",
"High Security Door",
"Terrace",
"Video Doorman",
"Double Glazed",
"Spa",
"Lobby",
"24 hour security"
],
"equipments_fr": [
"Climatisation",
"Ascenseur",
"Gym",
"Piscine",
"Piscine chauffée",
"Piscine partagée",
"Piscine extérieure",
"Piscine intérieure",
"Piscine privée",
"Porte haute sécurité",
"Terrasse",
"Portier vidéo",
"Double vitrage",
"Spa",
"Hall",
"Sécurité 24h / 24"
],
"floor": 4,
"fraction": "B428",
"gross_private_area": 70.6,
"id": "a0cTg000001EodtIAC",
"is_exclusive": true,
"land_area": 0,
"languages": [
"pt"
],
"last_updated": "2024-12-19T20:12:15.309Z",
"latitude": 38.68401802857143,
"longitude": -9.346859771428571,
"outdoor_area": 91.37,
"parent_property_id": "a0cTg000001Em2bIAC",
"parish": "Carcavelos E Parede",
"parish_id": "cascais-carcavelos-e-parede",
"parking_spaces": 0,
"photos": [
{
"main_photo": true,
"sequence": 1,
"url": "https://static.portadafrente.com/PF33027/01_Birdeye_04_1710930542533.jpg"
},
{
"main_photo": false,
"sequence": 2,
"url": "https://static.portadafrente.com/PF33027/02_Birdeye_Daylight_03_1710930542535.jpg"
},
{
"main_photo": false,
"sequence": 3,
"url": "https://static.portadafrente.com/PF33027/10_ExteriorPool_03_1710930542539.jpg"
},
{
"main_photo": false,
"sequence": 4,
"url": "https://static.portadafrente.com/PF33027/09_Pool_Interior_02_1710930542539.jpg"
},
{
"main_photo": false,
"sequence": 5,
"url": "https://static.portadafrente.com/PF33027/03_P5_T3B_Living_03_1710930542536.jpg"
},
{
"main_photo": false,
"sequence": 6,
"url": "https://static.portadafrente.com/PF33027/05_P4_T2B_Living_1710930542536.jpg"
},
{
"main_photo": false,
"sequence": 7,
"url": "https://static.portadafrente.com/PF33027/06_P4_T2_Balcony_1710930542537.jpg"
},
{
"main_photo": false,
"sequence": 8,
"url": "https://static.portadafrente.com/PF33027/07_P4_T2_Room_Small_1710930542538.jpg"
},
{
"main_photo": false,
"sequence": 9,
"url": "https://static.portadafrente.com/PF33027/08_P5_T4B_Room_Detail_1710930542538.jpg"
},
{
"main_photo": false,
"sequence": 10,
"url": "https://static.portadafrente.com/PF33027/16_P1_T1_GardenApartment_02_1710930542540.jpg"
},
{
"main_photo": false,
"sequence": 11,
"url": "https://static.portadafrente.com/PF33027/11_P4_T2_Bathroom_02_1710930542540.jpg"
},
{
"main_photo": false,
"sequence": 12,
"url": "https://static.portadafrente.com/PF33027/PoolBar_1729853954714.jpg"
},
{
"main_photo": false,
"sequence": 13,
"url": "https://static.portadafrente.com/PF33027/GYM_1729853954713.jpg"
},
{
"main_photo": false,
"sequence": 14,
"url": "https://static.portadafrente.com/PF33027/SPA_1729853954714.jpg"
}
],
"plan_url": "https://portadafrente.my.salesforce.com/sfc/p/1t000000D6v6/a/Tg000001jWBH/H100a5FF9se1iaeH237nRLxhurWZDVf4Lh8v7RRHD5M",
"postal_code": "2775-329",
"price": 1080000,
"price_on_application": false,
"published_at": "2024-03-21",
"rooms": 1,
"slug_url": "apartamento-t1-cascais-venda-a0cTg000001EodtIAC",
"slug_url_en": "1-bedroom-apartment-cascais-sale-a0cTg000001EodtIAC",
"slug_url_fr": "appartement-2-pieces-cascais-vente-a0cTg000001EodtIAC",
"state_id": "under-construction",
"surroundings": [
"Escola",
"Estação Ferroviária",
"Estação Rodoviária",
"Hospital",
"Praia",
"Vista para Mar",
"Vista para Praia"
],
"surroundings_en": [
"School",
"Train station",
"Railway station",
"Hospital",
"Beach",
"Sea View",
"Beach View"
],
"surroundings_fr": [
"École",
"Gare",
"Gare",
"Hôpital",
"Plage",
"Vue sur la mer",
"Vue sur la plage"
],
"title": "Apartamento T1, Cascais",
"title_en": "1 Bedroom Apartment, Cascais",
"title_fr": "Appartement 2 pièces, Cascais",
"zone": "Parede",
"zone_id": "cascais-parede"
},
"highlight": {},
"highlights": [],
"text_match": 100,
"text_match_info": {
"best_field_score": "0",
"best_field_weight": 12,
"fields_matched": 4,
"num_tokens_dropped": 1,
"score": "100",
"tokens_matched": 0,
"typo_prefix_score": 255
}
}
{
"document": {
"address": "Vértice | Avenida Sacadura Cabral 40",
"availability_ids": "disponivel",
"bathrooms": 3,
"business_type_id": "sale",
"category_id": "apartment",
"category_name": "Apartamento",
"category_name_en": "Apartment",
"category_name_fr": "Appartement",
"code": "PF33565",
"county": "Lisboa",
"county_id": "lisboa",
"cover_photo": "https://static.portadafrente.com/PF33373/ScreenShot00000_1714660742612.jpg",
"description": "Localizado numa das áreas mais prestigiadas de Lisboa, o empreendimento \"Vértice\" ergue-se no coração do Campo Pequeno. Com uma proposta residencial que visa elevar os padrões de qualidade, oferece uma gama diversificada de apartamentos, de T1 a T5, atendendo às necessidades e preferências de uma clientela exigente. O conceito arquitetónico do \"Vértice\" é uma ode à sobriedade e ao rigor. Cada linha desenhada, cada detalhe meticulosamente pensado reflete a busca pela perfeição estética e funcional. A clareza da materialidade é evidente em cada traço, revelando uma elegância atemporal que transcende modismos passageiros. Ao adentrar o complexo, somos envolvidos por uma atmosfera de serenidade e exclusividade. Os 70 apartamentos, distribuídos em diferentes tipologias, são verdadeiros refúgios urbanos, onde o conforto e o requinte se fundem em perfeita harmonia. Dos espaços íntimos às áreas sociais, cada ambiente foi concebido para proporcionar uma experiência de vida única e memorável. Além da excelência residencial, o \"Vértice\" oferece uma arrecadação privativa para cada unidade garante espaço adicional para guardar pertences de forma organizada, enquanto o acesso a um jardim de grande dimensão proporciona momentos de tranquilidade em meio à agitação da cidade. A localização privilegiada do empreendimento também merece destaque. Situado no Campo Pequeno, uma área conhecida pela sua riqueza cultural e facilidades urbanas, o \"Vértice\" oferece aos seus moradores uma vida cosmopolita sem igual. Com uma vasta oferta de serviços, comércio, escolas e lazer ao redor, os residentes desfrutam de uma qualidade de vida incomparável, onde o dinamismo da cidade encontra o equilíbrio perfeito com a tranquilidade do lar.",
"description_en": "Located in one of the most prestigious areas of Lisbon, the \"Vértice\" project arises in the heart of Campo Pequeno. With a residential proposal that aims to raise quality standards, it offers a diverse range of apartments, from 1 bedroom apartments to 5 bedroom apartments, meeting the needs and preferences of a demanding clientele.\r\n\r\nThe architectural concept of \"Vértice\" is an ode to sobriety and rigor. Every line designed, every detail meticulously thought reflects the search for aesthetic and functional perfection. The clarity of materiality is evident in every feature, revealing a timeless elegance that transcends passing fads.\r\n\r\nWhen entering the complex, we are surrounded by an atmosphere of serenity and exclusivity. The 70 apartments, distributed in different typologies, are true urban refuges, where comfort and refinement merge in perfect harmony. From intimate spaces to social areas, each environment is designed to provide a unique and memorable living experience.\r\n\r\nIn addition to residential excellence, \"Vértice\" offers a private storage area for each unit, which ensures additional space to store belongings in an organized way, while the access to a large dimensioned garden provides moments of serenity amid the bustle of the city.\r\n\r\nThe privileged location of the development is also worth mentioning. Located in Campo Pequeno, an area known for its cultural wealth and urban facilities, \"Vértice\" offers its residents an unmatchable cosmopolitan life. With a wide range of services, shops, schools and leisure in the vicinities, residents enjoy an unparalleled quality of life, where the city’s dynamism finds the perfect balance with the tranquillity of a home.",
"description_fr": "Dans l'un des quartiers les plus prestigieux de Lisbonne, le bâtiment Vértice se dresse au cœur de Campo Pequeno. \r\nAvec une proposition résidentielle qui vise à élever les standards de qualité, le bâtiment propose une gamme diversifiée d'appartements, allant des 2 pièces aux 6 pièces, répondant aux besoins et préférences d'une clientèle exigeante. \r\n\r\nLe concept architectural de Vértice est une ode à la sobriété et à la rigueur. Chaque ligne dessinée et chaque détail minutieusement pensé reflètent la recherche de la perfection esthétique et fonctionnelle, révélant une élégance intemporelle, transcendant les phénomènes de modes.\r\n\r\nDès l'entrée du bâtiment, nous sommes enveloppés par une atmosphère de sérénité et d'exclusivité. Les 70 appartements, de différents types, sont de véritables refuges urbains, où le confort et le raffinement se fusionnent en parfaite harmonie. \r\nLes pièces de vie et les chambres ont été conçues pour offrir une expérience de vie unique et mémorable, créant des ambiances uniques.\r\n\r\nEn plus de l'excellence des appartements, chaque unité de Vértice dispose d’un débarras, afin de garantir un espace supplémentaire pour ranger les affaires de manière organisée. L’accès au jardin, de grande taille, offre des moments de tranquillité au milieu de l'agitation de la ville. \r\n\r\nSon emplacement privilégié à Campo Pequeno doit aussi être souligné car c’est un quartier connu pour sa richesse culturelle et ses équipements urbains. Vértice offre ainsi à ses résidents une vie cosmopolite sans précédent. Avec un large éventail de services, de commerces, d’établissements d’enseignement et d’espaces de loisirs aux alentours, les résidents bénéficient d’une qualité de vie incomparable, où le dynamisme de la ville trouve l’équilibre parfait avec la tranquillité de leur appartement.",
"equipments": [
"Acesso para Deficientes",
"Alarme",
"Ar Condicionado",
"Cozinha Equipada",
"Elevador",
"Isolamento Acústico",
"Isolamento Térmico",
"Video Porteiro",
"Vidros Duplos"
],
"equipments_en": [
"Disabled People Access",
"Alarm",
"Air Conditioning",
"Equipped kitchen",
"Elevator",
"Acoustic Insulation",
"Thermal Insulation",
"Video Doorman",
"Double Glazed"
],
"equipments_fr": [
"Accès mobilité réduite",
"Alarme",
"Climatisation",
"Cuisine équipée",
"Ascenseur",
"Isolation sonore",
"Isolation thermique",
"Portier vidéo",
"Double vitrage"
],
"floor": 1,
"fraction": "414",
"gross_private_area": 150,
"id": "a0cTg000001iS01IAE",
"is_exclusive": true,
"land_area": 0,
"languages": [
"pt"
],
"last_updated": "2024-12-19T20:11:58.631Z",
"latitude": 38.743487825,
"longitude": -9.143735849999999,
"outdoor_area": 16,
"parent_property_id": "a0cTg000001YkHZIA0",
"parish": "Avenidas Novas",
"parish_id": "lisboa-avenidas-novas",
"parking_spaces": 2,
"photos": [
{
"main_photo": false,
"sequence": 1,
"url": "https://static.portadafrente.com/PF33373/E3_BigNewFacadeColor_V3_1718638487850.png"
},
{
"main_photo": false,
"sequence": 2,
"url": "https://static.portadafrente.com/PF33373/O1_Big_NewFacadeColor_V3_1718638487849.png"
},
{
"main_photo": false,
"sequence": 3,
"url": "https://static.portadafrente.com/PF33373/E11_Big_V2_NewFacadeColor_V3_1718638487849.png"
},
{
"main_photo": false,
"sequence": 4,
"url": "https://static.portadafrente.com/PF33373/Masteplan_1718638487854.png"
},
{
"main_photo": false,
"sequence": 5,
"url": "https://static.portadafrente.com/PF33373/261+%28T5+penthouse%29_1718638555131.png"
},
{
"main_photo": false,
"sequence": 6,
"url": "https://static.portadafrente.com/PF33373/303+%28T2%29_1718638555132.png"
},
{
"main_photo": false,
"sequence": 7,
"url": "https://static.portadafrente.com/PF33373/461+%28T3%29_1_1718638555134.png"
},
{
"main_photo": false,
"sequence": 8,
"url": "https://static.portadafrente.com/PF33373/461+%28T3%29_2_1718638555135.png"
},
{
"main_photo": false,
"sequence": 9,
"url": "https://static.portadafrente.com/PF33373/231+%28T3%29_1718638555136.png"
},
{
"main_photo": false,
"sequence": 10,
"url": "https://static.portadafrente.com/PF33373/553+%28T2%29_1718638555137.png"
},
{
"main_photo": false,
"sequence": 11,
"url": "https://static.portadafrente.com/PF33373/T1-413_Viz_Cam4_1718638715397.png"
},
{
"main_photo": false,
"sequence": 12,
"url": "https://static.portadafrente.com/PF33373/T1-413_Viz.0001_1718638715399.png"
},
{
"main_photo": false,
"sequence": 13,
"url": "https://static.portadafrente.com/PF33373/T1-413_Viz.0000_1718638715399.png"
},
{
"main_photo": false,
"sequence": 14,
"url": "https://static.portadafrente.com/PF33373/T3-252_Viz_Cam1_1718638814123.png"
},
{
"main_photo": false,
"sequence": 15,
"url": "https://static.portadafrente.com/PF33373/T3-231_Viz_Cam1_1718638848855.png"
},
{
"main_photo": false,
"sequence": 16,
"url": "https://static.portadafrente.com/PF33373/Penthouse-161_Viz.0000_1718638964969.png"
},
{
"main_photo": false,
"sequence": 17,
"url": "https://static.portadafrente.com/PF33373/Penthouse-161_Viz.0009_1718638964981.png"
},
{
"main_photo": false,
"sequence": 18,
"url": "https://static.portadafrente.com/PF33373/Penthouse-161_Viz.0001_1718638964971.png"
},
{
"main_photo": false,
"sequence": 19,
"url": "https://static.portadafrente.com/PF33373/Penthouse-161_Viz.0002_1718638964973.png"
},
{
"main_photo": false,
"sequence": 20,
"url": "https://static.portadafrente.com/PF33373/Penthouse-161_Viz.0003_1718638964974.png"
},
{
"main_photo": false,
"sequence": 21,
"url": "https://static.portadafrente.com/PF33373/Penthouse-161_Viz.0004_1718638964976.png"
},
{
"main_photo": false,
"sequence": 22,
"url": "https://static.portadafrente.com/PF33373/Penthouse-161_Viz.0005_1718638964977.png"
},
{
"main_photo": false,
"sequence": 23,
"url": "https://static.portadafrente.com/PF33373/Penthouse-161_Viz.0006_1718638964978.png"
},
{
"main_photo": false,
"sequence": 24,
"url": "https://static.portadafrente.com/PF33373/Penthouse-161_Viz.0007_1718638964979.png"
},
{
"main_photo": false,
"sequence": 25,
"url": "https://static.portadafrente.com/PF33373/Penthouse-161_Viz.0008_1718638964980.png"
},
{
"main_photo": false,
"sequence": 26,
"url": "https://static.portadafrente.com/PF33373/Penthouse-161_Viz.0010_1718638964982.png"
},
{
"main_photo": false,
"sequence": 27,
"url": "https://static.portadafrente.com/PF33373/T2-454_Viz_Cam5_1718639615729.png"
},
{
"main_photo": false,
"sequence": 28,
"url": "https://static.portadafrente.com/PF33373/T2-454_Viz_Cam4_1718639615738.png"
},
{
"main_photo": false,
"sequence": 29,
"url": "https://static.portadafrente.com/PF33373/T2-454_Viz_Cam3_1718639615739.png"
},
{
"main_photo": false,
"sequence": 30,
"url": "https://static.portadafrente.com/PF33373/T2-454_Viz_Cam1_1718639615740.png"
},
{
"main_photo": false,
"sequence": 31,
"url": "https://static.portadafrente.com/PF33373/T2-454_Viz_Cam2_1718639615741.png"
},
{
"main_photo": false,
"sequence": 32,
"url": "https://static.portadafrente.com/PF33373/T2-242_Viz_Cam1_1718639750562.png"
},
{
"main_photo": false,
"sequence": 33,
"url": "https://static.portadafrente.com/PF33373/T2-242_Viz_Cam2_1718639750563.png"
},
{
"main_photo": false,
"sequence": 34,
"url": "https://static.portadafrente.com/PF33373/T2-242_Viz_Cam3_1718639750563.png"
},
{
"main_photo": false,
"sequence": 35,
"url": "https://static.portadafrente.com/PF33373/T2-242_Viz_Cam4_1718639750565.png"
},
{
"main_photo": false,
"sequence": 36,
"url": "https://static.portadafrente.com/PF33373/T2-242_Viz_Cam5_1718639750565.png"
}
],
"plan_url": "https://portadafrente.my.salesforce.com/sfc/p/1t000000D6v6/a/Tg000000EGL3/ULQqv7dlicTpMgo5aFxlmRsNmD.m4cLa86xsj1AtGYs",
"postal_code": "1000-273",
"price": 1150000,
"price_on_application": false,
"published_at": "2024-05-06",
"rooms": 3,
"slug_url": "apartamento-t3-lisboa-venda-a0cTg000001iS01IAE",
"slug_url_en": "3-bedroom-apartment-lisboa-sale-a0cTg000001iS01IAE",
"slug_url_fr": "appartement-4-pieces-lisboa-vente-a0cTg000001iS01IAE",
"state_id": "under-construction",
"surroundings": [
"Aeroporto",
"Áreas de Lazer Infantil",
"Auto-Estrada",
"Banco",
"Bombeiros",
"Centro Comercial",
"Centro da Cidade",
"Escola",
"Espaços Verdes",
"Estação Ferroviária",
"Estação Rodoviária",
"Farmácia",
"Ginásio",
"Hipermercado",
"Hospital",
"Mercado",
"Orientação Solar Nascente",
"Orientação Solar Norte",
"Orientação Solar Poente",
"Orientação Solar Sul",
"Piscinas",
"Polícia",
"Posto de Combustível",
"Praça Táxis",
"Transportes Públicos",
"Vista para Cidade",
"Estacionamento"
],
"surroundings_en": [
"Airport",
"Children's play areas",
"Freeway",
"Bank",
"Fire department",
"Shopping center",
"Town centre",
"School",
"Green spaces",
"Train station",
"Railway station",
"Pharmacy",
"Gym",
"Hypermarket",
"Hospital",
"Mart",
"Rising Solar Orientation",
"Solar Orientation North",
"Solar Orientation West",
"Solar Orientation South",
"Pools",
"Police",
"Gas station",
"Taxis Square",
"Public Transportation",
"City View",
"Parking"
],
"surroundings_fr": [
"Aéroport",
"Aires de jeux pour enfants",
"Autoroute",
"Banque",
"Pompiers",
"Centre commercial",
"Centre-ville",
"École",
"Espaces verts",
"Gare",
"Gare",
"Pharmacie",
"Gym",
"grande surface",
"Hôpital",
"Marché",
"Orientation solaire croissante",
"Orientation solaire Nord",
"Orientation solaire Ouest",
"Orientation solaire Sud",
"Piscines",
"Police",
"Station-essence",
"Taxis Square",
"Transport public",
"Vue de la ville",
"Parking"
],
"title": "Apartamento T3, Lisboa",
"title_en": "3 Bedroom Apartment, Lisboa",
"title_fr": "Appartement 4 pièces, Lisboa",
"zone": "Campo Pequeno",
"zone_id": "lisboa-campo-pequeno"
},
"highlight": {},
"highlights": [],
"text_match": 100,
"text_match_info": {
"best_field_score": "0",
"best_field_weight": 12,
"fields_matched": 4,
"num_tokens_dropped": 1,
"score": "100",
"tokens_matched": 0,
"typo_prefix_score": 255
}
}
{
"document": {
"address": "Rua D. José de Avillez, 141, 1dto, Bloco D",
"availability_ids": "disponivel",
"bathrooms": 3,
"business_type_id": "sale",
"category_id": "apartment",
"category_name": "Apartamento",
"category_name_en": "Apartment",
"category_name_fr": "Appartement",
"code": "PF33784",
"county": "Cascais",
"county_id": "cascais",
"cover_photo": "https://static.portadafrente.com/PF33784/_BB21802_1716133435369.JPG",
"description": "Se quer viver no centro de Cascais em condomínio fechado, este é o apartamento para si. Apartamento T3 em Condomínio localizado numa zona de prestígio em Cascais, a cinco minutos a pé da ciclovia, Boca do Inferno e apenas a dez minutos a pé do centro da vila de Cascais. Condomínio com Segurança 24h, portaria, jardim e piscina. O Apartamento tem uma excelente exposição solar nascente e poente, o que lhe confere muita luminosidade, janelas com vidro duplo e aquecimento central. O Apartamento é composto por: - Hall de Entrada com roupeiros embutidos - Cozinha espaçosa totalmente equipada - Sala com uma área de 48m2 que dá acesso a um pequeno terraço com vista para o jardim e piscina do Condomínio - Casa de banho social - Hall dos quartos com roupeiro - Dois quartos com casa de banho de apoio -Uma suíte com varanda. Todos os quartos têm roupeiros embutidos. Tem ainda dois lugares de estacionamento e arrecadação. Cascais é uma vila portuguesa conhecida pela sua baía de praias, comércio e cosmopolitismo. Considerado o destino mais sofisticado da região de Lisboa, imperam os palacetes e a elegância requintada de todas as construções. Com o mar a seus pés, Cascais pode orgulhar-se de ter 7 campos de golfe, um casino, uma marina e inúmeros espaços de lazer. A 30 minutos de Lisboa e do aeroporto internacional. A Porta da Frente Christie’s é uma empresa de mediação imobiliária que trabalha no mercado há mais de duas décadas, focando-se nos melhores imóveis e empreendimentos, quer para venda quer para arrendamento. A empresa foi selecionada pela prestigiada marca Christie’s International Real Estate para representar Portugal, nas zonas de Lisboa, Cascais, Oeiras e Alentejo. A principal missão da Porta da Frente Christie’s é privilegiar um serviço de excelência a todos os nossos clientes.",
"description_en": "If you want to live in the centre of Cascais, in a closed condominium, this is the apartment for you. \r\n3 bedroom apartment in a condominium located in a prestigious area in Cascais, a five minutes’ walk from the bicycle path, Boca do Inferno and only a ten minutes walking distance from the centre of the village of Cascais. \r\nCondominium with 24 hour security, concierge, garden and swimming pool. The apartment offers an excellent east and west sun exposure, which provides plenty of light, being equipped with double glazed windows and central heating. \r\nThe apartment is composed by: \r\n- Entrance hall with embedded wardrobes \r\n- Fully equipped spacious kitchen \r\n- Living Room with a 48 sqm area that accesses a small terrace overlooking the garden and swimming pool of the Condominium \r\n- Social bathroom \r\n- Hall that distributes the bedrooms with wardrobe \r\n- Two bedrooms supported by a bathroom \r\n- A suite with balcony. \r\nAll bedrooms include embedded wardrobes. \r\nIt also has two parking spaces and a storage area.\r\n\r\nCascais is a Portuguese village famous for its bay, local business and its cosmopolitanism. It is considered the most sophisticated destination of the Lisbon’s region, where small palaces and refined and elegant constructions prevail. With the sea as a scenario, Cascais can be proud of having 7 golf courses, a casino, a marina and countless leisure areas. It is 30 minutes away from Lisbon and its international airport.\r\n\r\nPorta da Frente Christie’s is a real estate agency that has been operating in the market for more than two decades. Its focus lays on the highest quality houses and developments, not only in the selling market, but also in the renting market. The company was elected by the prestigious brand Christie’s – one of the most reputable auctioneers, Art institutions and Real Estate of the world – to be represented in Portugal, in the areas of Lisbon, Cascais, Oeiras, Sintra and Alentejo. The main purpose of Porta da Frente Christie’s is to offer a top-notch service to our customers.",
"description_fr": "Si vous souhaitez vivre au centre de Cascais, dans un bâtiment en copropriété sécurisé, cet appartement est fait pour vous. \r\nAppartement 4 pièces dans un bâtiment en copropriété sécurisé, dans un quartier prestigieux de Cascais. À cinq minutes à pied de la piste cyclable, de Boca do Inferno et à seulement dix minutes à pied du centre de la petite ville de Cascais. \r\nBâtiment en copropriété sécurisé 24h/24, avec concierge, jardin et piscine. \r\nL'appartement bénéficie d'une excellente orientation est et ouest, ce qui lui confère beaucoup de lumière. Avec des fenêtres à double vitrage et du chauffage central. \r\nL'appartement comprend :\r\n - Hall d'entrée avec placards\r\n- Spacieuse cuisine entièrement équipée \r\n- Salon d'une surface de 48 m2 qui donne accès à une petite terrasse donnant sur le jardin et la piscine de la copropriété \r\n- Toilettes\r\n- Couloir des chambres avec placard \r\n- Deux chambres avec salle de bains \r\n- Une suite avec balcon. \r\nToutes les chambres ont des placards. \r\nAvec encore deux places de parking et un débarras.\r\n\r\nCascais est une petite ville portugaise, connue pour sa baie de plages, son commerce et son cosmopolitisme. Considérée comme la destination la plus sophistiquée de la région de Lisbonne, les demeures et l'élégance raffinée de tous les bâtiments s'imposent. Avec la mer à ses pieds, Cascais peut être fière d'avoir 7 terrains de golf, un casino, une marina et de nombreuses aires de loisirs. À 30 minutes de Lisbonne et de l'aéroport international.\r\n\r\nPorta da Frente Christie's est une agence immobilière qui opère sur le marché depuis plus de deux décennies, se concentrant sur les meilleurs biens immobiliers, complexes résidentiels et aménagements, au niveau de la vente et de la location. L'agence a été sélectionnée par la prestigieuse marque Christie's International Real Estate pour la représenter au Portugal, dans les régions de Lisbonne, Cascais, Oeiras et Alentejo. La mission principale de Porta da Frente Christie's est d'assurer un service d'excellence à tous ses clients.",
"equipments": [
"Aquecimento Central",
"Arrecadação",
"Elevador",
"Garagem",
"Piscina Comum",
"Roupeiros",
"Sala de Condomínio",
"Varanda",
"Portaria",
"Segurança 24 horas",
"Vídeo vigilância"
],
"equipments_en": [
"Central Heating",
"Storage Room",
"Elevator",
"Garage",
"Shared Swimming Pool",
"Wardrobes",
"Condominium Room",
"Balcony",
"Lobby",
"24 hour security",
"Video surveillance"
],
"equipments_fr": [
"Chauffage central",
"Rangement",
"Ascenseur",
"Garage",
"Piscine partagée",
"Armoires",
"Salle de condominium",
"Balcon",
"Hall",
"Sécurité 24h / 24",
"Vidéosurveillance"
],
"floor": 1,
"fraction": "V",
"gross_private_area": 156,
"id": "a0cTg000001og9xIAA",
"is_exclusive": false,
"land_area": 0,
"languages": [
"pt"
],
"last_updated": "2024-12-19T20:11:33.680Z",
"latitude": 38.694946683333335,
"longitude": -9.4289139,
"parish": "Cascais E Estoril",
"parish_id": "cascais-cascais-e-estoril",
"parking_spaces": 2,
"photos": [
{
"main_photo": false,
"sequence": 1,
"url": "https://static.portadafrente.com/PF33784/_BB21767_1716133435365.JPG"
},
{
"main_photo": false,
"sequence": 2,
"url": "https://static.portadafrente.com/PF33784/_BB21772_1716133435366.JPG"
},
{
"main_photo": false,
"sequence": 3,
"url": "https://static.portadafrente.com/PF33784/_BB21776_1716133435367.JPG"
},
{
"main_photo": false,
"sequence": 4,
"url": "https://static.portadafrente.com/PF33784/_BB21782_1716133435367.JPG"
},
{
"main_photo": false,
"sequence": 5,
"url": "https://static.portadafrente.com/PF33784/_BB21787_1716133435368.JPG"
},
{
"main_photo": false,
"sequence": 6,
"url": "https://static.portadafrente.com/PF33784/_BB21792_1716133435368.JPG"
},
{
"main_photo": false,
"sequence": 7,
"url": "https://static.portadafrente.com/PF33784/_BB21797_1716133435369.JPG"
},
{
"main_photo": true,
"sequence": 8,
"url": "https://static.portadafrente.com/PF33784/_BB21802_1716133435369.JPG"
},
{
"main_photo": false,
"sequence": 9,
"url": "https://static.portadafrente.com/PF33784/_BB21807_1716133435369.JPG"
},
{
"main_photo": false,
"sequence": 10,
"url": "https://static.portadafrente.com/PF33784/_BB21812_1716133435370.JPG"
},
{
"main_photo": false,
"sequence": 11,
"url": "https://static.portadafrente.com/PF33784/_BB21817_1716133435370.JPG"
},
{
"main_photo": false,
"sequence": 12,
"url": "https://static.portadafrente.com/PF33784/_BB21822_1716133435370.JPG"
},
{
"main_photo": false,
"sequence": 13,
"url": "https://static.portadafrente.com/PF33784/_BB21827_1716133435371.JPG"
},
{
"main_photo": false,
"sequence": 14,
"url": "https://static.portadafrente.com/PF33784/_BB21832_1716133435371.JPG"
},
{
"main_photo": false,
"sequence": 15,
"url": "https://static.portadafrente.com/PF33784/_BB21837_1716133435371.JPG"
},
{
"main_photo": false,
"sequence": 16,
"url": "https://static.portadafrente.com/PF33784/_BB21847_1716133435372.JPG"
},
{
"main_photo": false,
"sequence": 17,
"url": "https://static.portadafrente.com/PF33784/_BB21851_1716133435372.JPG"
},
{
"main_photo": false,
"sequence": 18,
"url": "https://static.portadafrente.com/PF33784/_BB21857_1716133435372.JPG"
},
{
"main_photo": false,
"sequence": 19,
"url": "https://static.portadafrente.com/PF33784/_BB21861_1716133435373.JPG"
},
{
"main_photo": false,
"sequence": 20,
"url": "https://static.portadafrente.com/PF33784/_BB21872_1716133435373.JPG"
},
{
"main_photo": false,
"sequence": 21,
"url": "https://static.portadafrente.com/PF33784/_BB21877_1716133435373.JPG"
},
{
"main_photo": false,
"sequence": 22,
"url": "https://static.portadafrente.com/PF33784/_BB21881_1716133435373.JPG"
},
{
"main_photo": false,
"sequence": 23,
"url": "https://static.portadafrente.com/PF33784/_BB21887_1716133435374.JPG"
},
{
"main_photo": false,
"sequence": 24,
"url": "https://static.portadafrente.com/PF33784/_BB21891_1716133435374.JPG"
},
{
"main_photo": false,
"sequence": 25,
"url": "https://static.portadafrente.com/PF33784/_BB21897_1716133435374.JPG"
},
{
"main_photo": false,
"sequence": 26,
"url": "https://static.portadafrente.com/PF33784/_BB21902_1716133435375.JPG"
},
{
"main_photo": false,
"sequence": 27,
"url": "https://static.portadafrente.com/PF33784/_BB21907_1716133435375.JPG"
},
{
"main_photo": false,
"sequence": 28,
"url": "https://static.portadafrente.com/PF33784/_BB21912_1716133435375.JPG"
},
{
"main_photo": false,
"sequence": 29,
"url": "https://static.portadafrente.com/PF33784/_BB21913_1716133435376.JPG"
},
{
"main_photo": false,
"sequence": 30,
"url": "https://static.portadafrente.com/PF33784/untitled-01718_1716133435376.jpg"
},
{
"main_photo": false,
"sequence": 31,
"url": "https://static.portadafrente.com/PF33784/untitled-01719_1716133435376.jpg"
},
{
"main_photo": false,
"sequence": 32,
"url": "https://static.portadafrente.com/PF33784/untitled-01720_1716133435377.jpg"
},
{
"main_photo": false,
"sequence": 33,
"url": "https://static.portadafrente.com/PF33784/untitled-01721_1716133435377.jpg"
},
{
"main_photo": false,
"sequence": 34,
"url": "https://static.portadafrente.com/PF33784/untitled-01722_1716133435377.jpg"
},
{
"main_photo": false,
"sequence": 35,
"url": "https://static.portadafrente.com/PF33784/untitled-01723_1716133435378.jpg"
},
{
"main_photo": false,
"sequence": 36,
"url": "https://static.portadafrente.com/PF33784/untitled-01724_1716133435378.jpg"
},
{
"main_photo": false,
"sequence": 37,
"url": "https://static.portadafrente.com/PF33784/untitled-01725_1716133435379.jpg"
},
{
"main_photo": false,
"sequence": 38,
"url": "https://static.portadafrente.com/PF33784/untitled-01726_1716133435379.jpg"
},
{
"main_photo": false,
"sequence": 39,
"url": "https://static.portadafrente.com/PF33784/untitled-01727_1716133435379.jpg"
},
{
"main_photo": false,
"sequence": 40,
"url": "https://static.portadafrente.com/PF33784/untitled-01728_1716133435380.jpg"
},
{
"main_photo": false,
"sequence": 41,
"url": "https://static.portadafrente.com/PF33784/untitled-01729_1716133435380.jpg"
},
{
"main_photo": false,
"sequence": 42,
"url": "https://static.portadafrente.com/PF33784/untitled-01730_1716133435380.jpg"
},
{
"main_photo": false,
"sequence": 43,
"url": "https://static.portadafrente.com/PF33784/untitled-01731_1716133435381.jpg"
},
{
"main_photo": false,
"sequence": 44,
"url": "https://static.portadafrente.com/PF33784/untitled-01732_1716133435381.jpg"
},
{
"main_photo": false,
"sequence": 45,
"url": "https://static.portadafrente.com/PF33784/untitled-01733_1716133435381.jpg"
},
{
"main_photo": false,
"sequence": 46,
"url": "https://static.portadafrente.com/PF33784/untitled-01914_1716133435382.jpg"
},
{
"main_photo": false,
"sequence": 47,
"url": "https://static.portadafrente.com/PF33784/untitled-01917_1716133435382.jpg"
},
{
"main_photo": false,
"sequence": 48,
"url": "https://static.portadafrente.com/PF33784/untitled-01920_1716133435382.jpg"
}
],
"postal_code": "2750-398",
"price": 890000,
"price_on_application": false,
"published_at": "2024-05-15",
"rooms": 3,
"slug_url": "apartamento-t3-cascais-venda-a0cTg000001og9xIAA",
"slug_url_en": "3-bedroom-apartment-cascais-sale-a0cTg000001og9xIAA",
"slug_url_fr": "appartement-4-pieces-cascais-vente-a0cTg000001og9xIAA",
"state_id": "used",
"surroundings": [
"Aeroporto",
"Auto-Estrada",
"Banco",
"Bombeiros",
"Campo de Golfe",
"Centro Comercial",
"Condomínio Fechado",
"Escola",
"Espaços Verdes",
"Estação Ferroviária",
"Ginásio",
"Hipermercado",
"Hospital",
"Mercado",
"Praia",
"Vista para Jardim",
"Zona Histórica"
],
"surroundings_en": [
"Airport",
"Freeway",
"Bank",
"Fire department",
"Golf course",
"Shopping center",
"Closed condominium",
"School",
"Green spaces",
"Train station",
"Gym",
"Hypermarket",
"Hospital",
"Mart",
"Beach",
"Garden View",
"Historic Area"
],
"surroundings_fr": [
"Aéroport",
"Autoroute",
"Banque",
"Pompiers",
"Terrain de golf",
"Centre commercial",
"Copropriété fermée",
"École",
"Espaces verts",
"Gare",
"Gym",
"grande surface",
"Hôpital",
"Marché",
"Plage",
"Vue du jardin",
"Zone historique"
],
"title": "Apartamento T3, Cascais",
"title_en": "3 Bedroom Apartment, Cascais",
"title_fr": "Appartement 4 pièces, Cascais",
"zone": "Gandarinha",
"zone_id": "cascais-gandarinha"
},
"highlight": {},
"highlights": [],
"text_match": 100,
"text_match_info": {
"best_field_score": "0",
"best_field_weight": 12,
"fields_matched": 4,
"num_tokens_dropped": 1,
"score": "100",
"tokens_matched": 0,
"typo_prefix_score": 255
}
}
{
"document": {
"address": "Rua Cidade de Tomar 262",
"availability_ids": "disponivel",
"bathrooms": 3,
"business_type_id": "sale",
"category_id": "house",
"category_name": "Moradia",
"category_name_en": "House",
"category_name_fr": "Maison normal",
"code": "PF34055",
"county": "Cascais",
"county_id": "cascais",
"cover_photo": "https://static.portadafrente.com/PF34055/15_1719316247056.jpg",
"description": "Moradia de dois pisos, com vista de mar fantástica, localizada em zona residencial na Parede, perto de comércio e da praia. Com uma área bruta de construção de 335m2, esta moradia T4 transformada em T3, é distribuída da seguinte forma: No piso de entrada: - hall espaçoso com uma antecâmara envidraçada; - Escritório; - Sala; - Cozinha, equipada com eletrodomésticos Miele e saída para o exterior para um terraço com zona de barbecue; - Casa de Banho Social. Piso 1: - Suite com excecional vista mar; - Dois quartos; - Casa de banho de apoio. Esta moradia conta ainda com uma cave/garagem que se estende por toda a área da casa, onde existe uma generosa área de arrumos, uma lavandaria, uma adega, e parqueamento para 3 carros. Na área exterior, podemos encontrar um amplo espaço de lazer no pátio de entrada da casa, e na parte de trás, com entrada pela cozinha, temos um terraço com zona de barbecue. A moradia está equipada com aquecimento central em todas as divisões, janelas blindadas, estores elétricos, painéis solares para aquecimento de água e painéis fotovoltaicos para eletricidade. Está localizada numa zona tranquila e residencial da Parede, estando próxima de todo o comércio, a 15 minutos a pé da praia, restaurantes e escolas. Parede é uma freguesia do concelho de Cascais, e está limitada a Sul pelo Oceano Atlântico - Baía de Cascais, a Nascente pela freguesia de Carcavelos, a Norte pela freguesia de São Domingos de Rana e a Poente pela freguesia do Estoril. A sua grande atracção são as praias, as quais, com um clima excepcionalmente rico em iodo, são ideais para quem tem problemas de ossos e procura tratamento. Bem a propósito estão localizados dois dos melhores hospitais de ortopedia da Europa. Mesmo ao lado, é possível disfrutar dos prazeres do sol português na praia das Avencas. De referir ainda o Parque Morais, que embora não sendo muito extenso, se encontra muito bem cuidado e com a zona dedicada aos mais pequenos, munida de equipamento lúdico renovado e seguro. Com acesso pela agradável Avenida Marginal, a Parede tem uma zona de moradias muito agradáveis do lado mar, e no centro, bastante comércio local, que vale a pena conhecer. A Porta da Frente Christie’s é uma empresa de mediação imobiliária que trabalha no mercado há mais de duas décadas, focando-se nos melhores imóveis e empreendimentos, quer para venda quer para arrendamento. A empresa foi selecionada pela prestigiada marca Christie’s International Real Estate para representar Portugal, nas zonas de Lisboa, Cascais, Oeiras e Alentejo. A principal missão da Porta da Frente Christie’s é privilegiar um serviço de excelência a todos os nossos clientes.",
"description_en": "Two storey villa with fantastic sea views, located in a residential area in Parede, close to shops and the beach.\r\n\r\nWith a gross construction area of 335m2, this four-bedroom villa, converted into a three-bedroom, is distributed as follows:\r\n\r\nOn the entrance floor:\r\n- spacious hall with a glazed antechamber;\r\n- Office;\r\n- Living room;\r\n- Kitchen, equipped with Miele appliances and exit to the outside to a terrace with barbecue area;\r\n- Guest bathroom.\r\n\r\n1st floor:\r\n- Suite with exceptional sea views;\r\n- Two bedrooms;\r\n- Support bathroom.\r\n\r\nThis villa also has a basement/garage that extends over the entire area of the house, where there is a generous storage area, a laundry room, a cellar and parking for 3 cars.\r\nOutside, there is a large leisure area in the courtyard at the entrance to the house, and at the back, with an entrance through the kitchen, there is a terrace with a barbecue area.\r\n\r\nThe villa is equipped with central heating in all rooms, armoured windows, electric shutters, solar panels for water heating and photovoltaic panels for electricity.\r\n\r\nIt is located in a quiet, residential area of Parede, close to all shops, a 15-minute walk from the beach, restaurants and schools.\r\n\r\nParede is a parish in the municipality of Cascais and is bordered to the south by the Atlantic Ocean - Cascais Bay, to the east by the parish of Carcavelos, to the north by the parish of São Domingos de Rana and to the west by the parish of Estoril. Its main attraction is its beaches, which, with a climate exceptionally rich in iodine, are ideal for those with bone problems looking for treatment.\r\nTwo of the best orthopaedic hospitals in Europe are located here. Right next door, you can enjoy the pleasures of the Portuguese sun on Avencas beach. Also worth mentioning is Morais Park, which although not very extensive, is very well looked after and has a play area dedicated to the little ones, equipped with renovated and safe play equipment.\r\nAccessed via the pleasant Avenida Marginal, Parede has an area of very pleasant villas on the seafront and plenty of local shops in the centre, which are well worth a visit.\r\n\r\nPorta da Frente Christie's is a real estate agency that has been working in the market for over two decades, focusing on the best properties and developments, both for sale and for rent. The company was selected by the prestigious Christie's International Real Estate brand to represent Portugal in the Lisbon, Cascais, Oeiras and Alentejo areas. The main mission of Christie's Front Door is to provide an excellent service to all our clients.",
"description_fr": "Villa de deux étages avec une vue fantastique sur la mer, située dans un quartier résidentiel de Parede, à proximité des commerces et de la plage.\r\n\r\nAvec une surface brute de construction de 335m2, cette villa de quatre chambres à coucher, convertie en trois chambres à coucher, est distribuée comme suit :\r\n\r\nAu niveau de l'entrée :\r\n- hall spacieux avec une antichambre vitrée ;\r\n- Bureau ;\r\n- Salon ;\r\n- Cuisine, équipée d'appareils Miele et sortie vers l'extérieur sur une terrasse avec coin barbecue ;\r\n- Salle de bain pour les invités.\r\n\r\n1er étage :\r\n- Suite avec vue exceptionnelle sur la mer ;\r\n- Deux chambres à coucher ;\r\n- Salle de bain d'appoint.\r\n\r\nCette villa dispose également d'un sous-sol/garage qui s'étend sur toute la surface de la maison, où l'on trouve un grand espace de rangement, une buanderie, une cave et un parking pour 3 voitures.\r\nA l'extérieur, il y a une grande zone de loisirs dans la cour à l'entrée de la maison, et à l'arrière, avec une entrée par la cuisine, il y a une terrasse avec une zone de barbecue.\r\n\r\nLa villa est équipée de chauffage central dans toutes les pièces, de fenêtres blindées, de volets électriques, de panneaux solaires pour le chauffage de l'eau et de panneaux photovoltaïques pour l'électricité.\r\n\r\nElle est située dans un quartier résidentiel calme de Parede, à proximité de tous les commerces, à 15 minutes à pied de la plage, des restaurants et des écoles.\r\n\r\nParede est une paroisse de la municipalité de Cascais, bordée au sud par l'océan Atlantique - baie de Cascais, à l'est par la paroisse de Carcavelos, au nord par la paroisse de São Domingos de Rana et à l'ouest par la paroisse d'Estoril. Son principal attrait réside dans ses plages qui, avec un climat exceptionnellement riche en iode, sont idéales pour les personnes souffrant de problèmes osseux et cherchant à se faire soigner.\r\nDeux des meilleurs hôpitaux orthopédiques d'Europe s'y trouvent. Juste à côté, vous pouvez profiter des plaisirs du soleil portugais sur la plage d'Avencas. Il convient également de mentionner le parc Morais qui, bien que peu étendu, est très bien entretenu et dispose d'une aire de jeux dédiée aux plus petits, équipée de jeux rénovés et sécurisés.\r\nAccessible par l'agréable Avenida Marginal, Parede possède un quartier de villas très agréables en bord de mer et de nombreux commerces de proximité dans le centre, qui valent la peine d'être visités.\r\n\r\nPorta da Frente Christie's est une agence immobilière qui travaille sur le marché depuis plus de deux décennies, en se concentrant sur les meilleures propriétés et développements, à la fois à la vente et à la location. L'entreprise a été sélectionnée par la prestigieuse marque Christie's International Real Estate pour représenter le Portugal dans les régions de Lisbonne, Cascais, Oeiras et Alentejo. La mission principale de Christie's Front Door est de fournir un service d'excellence à tous ses clients.",
"equipments": [
"Aquecimento Central",
"Cozinha Equipada",
"Exaustor",
"Fogão",
"Forno",
"Frigorífico",
"Garagem",
"Jardim",
"Lareira",
"Porta Blindada",
"Painéis Solares"
],
"equipments_en": [
"Central Heating",
"Equipped kitchen",
"Exhaust",
"Stove",
"Oven",
"Fridge",
"Garage",
"Garden",
"Fireplace",
"Armoured door",
"Solar panels"
],
"equipments_fr": [
"Chauffage central",
"Cuisine équipée",
"Échappement",
"Le fourneau",
"Four",
"Frigo",
"Garage",
"Jardin",
"Cheminée",
"Porte blindée",
"Panneaux solaires"
],
"floor": null,
"fraction": "",
"gross_build_area": 335.35,
"gross_private_area": 0,
"id": "a0cTg000002G4o5IAC",
"is_exclusive": false,
"land_area": 0,
"languages": [
"pt"
],
"last_updated": "2024-12-19T20:11:17.562Z",
"latitude": 38.69111478666667,
"longitude": -9.361998759999999,
"parish": "Carcavelos E Parede",
"parish_id": "cascais-carcavelos-e-parede",
"parking_spaces": 3,
"photos": [
{
"main_photo": false,
"sequence": 1,
"url": "https://static.portadafrente.com/PF34055/01_1719316247047.jpg"
},
{
"main_photo": false,
"sequence": 2,
"url": "https://static.portadafrente.com/PF34055/02_1719316247048.jpg"
},
{
"main_photo": false,
"sequence": 3,
"url": "https://static.portadafrente.com/PF34055/03_1719316247049.jpg"
},
{
"main_photo": false,
"sequence": 4,
"url": "https://static.portadafrente.com/PF34055/04_1719316247049.jpg"
},
{
"main_photo": false,
"sequence": 5,
"url": "https://static.portadafrente.com/PF34055/05_1719316247050.jpg"
},
{
"main_photo": false,
"sequence": 6,
"url": "https://static.portadafrente.com/PF34055/06_1719316247051.jpg"
},
{
"main_photo": false,
"sequence": 7,
"url": "https://static.portadafrente.com/PF34055/07_1719316247051.jpg"
},
{
"main_photo": false,
"sequence": 8,
"url": "https://static.portadafrente.com/PF34055/08_1719316247052.jpg"
},
{
"main_photo": false,
"sequence": 9,
"url": "https://static.portadafrente.com/PF34055/09_1719316247053.jpg"
},
{
"main_photo": false,
"sequence": 10,
"url": "https://static.portadafrente.com/PF34055/10_1719316247053.jpg"
},
{
"main_photo": false,
"sequence": 11,
"url": "https://static.portadafrente.com/PF34055/11_1719316247054.jpg"
},
{
"main_photo": false,
"sequence": 12,
"url": "https://static.portadafrente.com/PF34055/12_1719316247054.jpg"
},
{
"main_photo": false,
"sequence": 13,
"url": "https://static.portadafrente.com/PF34055/13_1719316247055.jpg"
},
{
"main_photo": false,
"sequence": 14,
"url": "https://static.portadafrente.com/PF34055/14_1719316247055.jpg"
},
{
"main_photo": true,
"sequence": 15,
"url": "https://static.portadafrente.com/PF34055/15_1719316247056.jpg"
},
{
"main_photo": false,
"sequence": 16,
"url": "https://static.portadafrente.com/PF34055/16_1719316247056.jpg"
},
{
"main_photo": false,
"sequence": 17,
"url": "https://static.portadafrente.com/PF34055/17_1719316247056.jpg"
},
{
"main_photo": false,
"sequence": 18,
"url": "https://static.portadafrente.com/PF34055/18_1719316247057.jpg"
},
{
"main_photo": false,
"sequence": 19,
"url": "https://static.portadafrente.com/PF34055/19_1719316247057.jpg"
},
{
"main_photo": false,
"sequence": 20,
"url": "https://static.portadafrente.com/PF34055/20_1719316247058.jpg"
},
{
"main_photo": false,
"sequence": 21,
"url": "https://static.portadafrente.com/PF34055/21_1719316247058.jpg"
},
{
"main_photo": false,
"sequence": 22,
"url": "https://static.portadafrente.com/PF34055/22_1719316247059.jpg"
},
{
"main_photo": false,
"sequence": 23,
"url": "https://static.portadafrente.com/PF34055/23_1719316247059.jpg"
},
{
"main_photo": false,
"sequence": 24,
"url": "https://static.portadafrente.com/PF34055/24_1719316247060.jpg"
},
{
"main_photo": false,
"sequence": 25,
"url": "https://static.portadafrente.com/PF34055/25_1719316247060.jpg"
},
{
"main_photo": false,
"sequence": 26,
"url": "https://static.portadafrente.com/PF34055/26_1719316247061.jpg"
},
{
"main_photo": false,
"sequence": 27,
"url": "https://static.portadafrente.com/PF34055/27_1719316247061.jpg"
},
{
"main_photo": false,
"sequence": 28,
"url": "https://static.portadafrente.com/PF34055/28_1719316247062.jpg"
},
{
"main_photo": false,
"sequence": 29,
"url": "https://static.portadafrente.com/PF34055/29_1719316247062.jpg"
},
{
"main_photo": false,
"sequence": 30,
"url": "https://static.portadafrente.com/PF34055/30_1719316247062.jpg"
},
{
"main_photo": false,
"sequence": 31,
"url": "https://static.portadafrente.com/PF34055/141052_floor1_1724856454652.png"
},
{
"main_photo": false,
"sequence": 32,
"url": "https://static.portadafrente.com/PF34055/141052_floor2_1724856454652.png"
}
],
"postal_code": "2775-183",
"price": 1890000,
"price_on_application": false,
"published_at": "2024-06-26",
"rooms": 3,
"slug_url": "moradia-geminada-t3-cascais-venda-a0cTg000002G4o5IAC",
"slug_url_en": "3-bedroom-semi-detached-house-cascais-sale-a0cTg000002G4o5IAC",
"slug_url_fr": "maison-jumelee-4-pieces-cascais-vente-a0cTg000002G4o5IAC",
"state_id": "used",
"sub_category_id": "moradia-geminada",
"sub_category_name": "Moradia Geminada",
"surroundings": [
"Estação Ferroviária",
"Praia",
"Vista para Mar"
],
"surroundings_en": [
"Train station",
"Beach",
"Sea View"
],
"surroundings_fr": [
"Gare",
"Plage",
"Vue sur la mer"
],
"title": "Moradia Geminada T3, Cascais",
"title_en": "3 Bedroom Semi-detached house, Cascais",
"title_fr": "Maison jumelée 4 pièces, Cascais",
"zone": "Bairro de Santa Teresinha",
"zone_id": "cascais-bairro-de-santa-teresinha"
},
"highlight": {},
"highlights": [],
"text_match": 100,
"text_match_info": {
"best_field_score": "0",
"best_field_weight": 12,
"fields_matched": 4,
"num_tokens_dropped": 1,
"score": "100",
"tokens_matched": 0,
"typo_prefix_score": 255
}
}
{
"document": {
"address": "Rua Abílio Mendes, 20 - 7º Esqº",
"availability_ids": "disponivel",
"bathrooms": 4,
"business_type_id": "sale",
"category_id": "apartment",
"category_name": "Apartamento",
"category_name_en": "Apartment",
"category_name_fr": "Appartement",
"code": "PF34811",
"county": "Lisboa",
"county_id": "lisboa",
"cover_photo": "https://static.portadafrente.com/PF34811/42_1727857344254.jpg",
"description": "Este magnífico apartamento T5, com 216 m² de área bruta privativa, é um refúgio de conforto e elegância, situado no prestigiado bairro do Alto dos Moinhos, em Lisboa. Com três lugares de garagem e uma arrecadação espaçosa, o imóvel destaca-se pelos seus acabamentos de alta qualidade e espaços generosos. A sala ampla e acolhedora convida a momentos de descontração, enquanto os cinco quartos, dos quais dois são suítes, oferecem ambientes perfeitos para descanso e privacidade. Um dos quartos foi transformado numa encantadora sala adicional, ideal para receber amigos e família. A cozinha, totalmente equipada, é um verdadeiro convite para explorar o prazer de cozinhar, e as duas casas de banho, modernas e elegantes, completam este lar perfeito. Envolvido por uma atmosfera tranquila, o apartamento está localizado numa zona de condomínios de prestígio no Alto dos Moinhos, onde a conveniência e o charme urbano se encontram. A apenas 5 minutos a pé da estação de metro de Alto dos Moinhos e do Hospital Lusíadas, e a 8 minutos do Externato Maristas de Lisboa, este é o local ideal para quem valoriza a proximidade a serviços essenciais. De carro, em poucos minutos, chega-se ao Colégio Militar e ao verdejante Parque Florestal de Monsanto. A prestigiada Universidade Católica de Lisboa, a Cidade Universitária e o Aeroporto de Lisboa, estão a pouco mais de 10 minutos de carro. Este apartamento é mais do que um simples espaço para viver; é um convite para desfrutar da essência de um estilo de vida sofisticado, onde cada detalhe foi pensado para criar um ambiente acolhedor e repleto de charme. A Porta da Frente Christie’s é uma empresa de mediação imobiliária que trabalha no mercado há mais de duas décadas, focando-se nos melhores imóveis e empreendimentos, quer para venda quer para arrendamento. A empresa foi selecionada pela prestigiada marca Christie’s International Real Estate para representar Portugal, nas zonas de Lisboa, Cascais, Oeiras e Alentejo. A principal missão da Porta da Frente Christie’s é privilegiar um serviço de excelência a todos os nossos clientes.",
"description_en": "This magnificent 5-bedroom apartment, with 216 m² of gross private area, is a haven of comfort and elegance, located in the prestigious Alto dos Moinhos neighborhood in Lisbon. With three parking spaces and a spacious storage room, the property stands out for its high-quality finishes and generous spaces. The large and cozy living room invites moments of relaxation, while the five bedrooms, two of which are suites, offer perfect environments for rest and privacy. One of the bedrooms has been transformed into a charming additional living room, ideal for entertaining friends and family. The fully equipped kitchen is a true invitation to explore the pleasures of cooking, and the two modern and elegant bathrooms complete this perfect home.\r\n\r\nSurrounded by a tranquil atmosphere, the apartment is located in a prestigious condominium area in Alto dos Moinhos, where convenience and urban charm meet. Just a 5-minute walk from the Alto dos Moinhos metro station and Lusíadas Hospital, and 8 minutes from Externato Maristas de Lisboa, this is the ideal location for those who value proximity to essential services. By car, in just a few minutes, you can reach Colégio Militar and the green Monsanto Forest Park. The prestigious Catholic University of Lisbon, University City, and Lisbon Airport are just over 10 minutes away by car.\r\n\r\nThis apartment is more than just a place to live; it is an invitation to enjoy the essence of a sophisticated lifestyle, where every detail has been carefully considered to create a welcoming and charming environment.\r\n\r\nPorta da Frente Christie’s is a real estate agency that has been working in the market for over two decades, focusing on the best properties and developments, both for sale and rental. The company was selected by the prestigious Christie’s International Real Estate brand to represent Portugal in the areas of Lisbon, Cascais, Oeiras, and Alentejo. The main mission of Porta da Frente Christie’s is to provide an excellent service to all our clients.",
"description_fr": "Ce magnifique appartement de 5 chambres, avec 216 m² de surface brute privative, est un refuge de confort et d'élégance, situé dans le prestigieux quartier d'Alto dos Moinhos, à Lisbonne. Doté de trois places de parking et d'un spacieux débarras, le bien se distingue par ses finitions de haute qualité et ses espaces généreux. Le salon, vaste et accueillant, invite à des moments de détente, tandis que les cinq chambres, dont deux suites, offrent des espaces parfaits pour le repos et l'intimité. L'une des chambres a été transformée en un charmant salon supplémentaire, idéal pour recevoir des amis et la famille. La cuisine, entièrement équipée, est une véritable invitation à explorer le plaisir de cuisiner, et les deux salles de bains modernes et élégantes complètent ce parfait foyer.\r\n\r\nEntouré d'une atmosphère tranquille, l'appartement est situé dans une zone de condominiums de prestige à Alto dos Moinhos, où commodité et charme urbain se rencontrent. À seulement 5 minutes à pied de la station de métro Alto dos Moinhos et de l'Hôpital Lusíadas, et à 8 minutes de l'Externato Maristas de Lisboa, c'est l'emplacement idéal pour ceux qui apprécient la proximité des services essentiels. En voiture, en quelques minutes, vous atteignez le Colégio Militar et le verdoyant Parc Forestier de Monsanto. L'Université Catholique de Lisbonne, la Cité Universitaire et l'Aéroport de Lisbonne se trouvent à un peu plus de 10 minutes en voiture.\r\n\r\nCet appartement est bien plus qu'un simple espace de vie ; c'est une invitation à profiter de l'essence d'un style de vie sophistiqué, où chaque détail a été pensé pour créer une ambiance chaleureuse et pleine de charme.",
"equipments": [
"Ar Condicionado",
"Arrecadação",
"Banheira",
"Cozinha Equipada",
"Elevador",
"Porta Blindada",
"Portão Eléctrico",
"Roupeiros",
"Video Porteiro",
"Vidros Duplos",
"Varanda",
"Vigilância"
],
"equipments_en": [
"Air Conditioning",
"Storage Room",
"Bathtub",
"Equipped kitchen",
"Elevator",
"Armoured door",
"Electric gate",
"Wardrobes",
"Video Doorman",
"Double Glazed",
"Balcony",
"Surveillance"
],
"equipments_fr": [
"Climatisation",
"Rangement",
"Baignoire",
"Cuisine équipée",
"Ascenseur",
"Porte blindée",
"Portail électrique",
"Armoires",
"Portier vidéo",
"Double vitrage",
"Balcon",
"Surveillance"
],
"floor": 7,
"fraction": "AB",
"gross_private_area": 215.5,
"id": "a0cTg000003ZTgXIAW",
"is_exclusive": false,
"land_area": 0,
"languages": [
"pt"
],
"last_updated": "2024-12-19T20:11:01.438Z",
"latitude": 38.74851004,
"longitude": -9.176704139999998,
"parish": "Benfica",
"parish_id": "lisboa-benfica",
"parking_spaces": 3,
"photos": [
{
"main_photo": false,
"sequence": 1,
"url": "https://static.portadafrente.com/PF34811/01_1727857344230.jpg"
},
{
"main_photo": false,
"sequence": 2,
"url": "https://static.portadafrente.com/PF34811/02_1727857344231.jpg"
},
{
"main_photo": false,
"sequence": 3,
"url": "https://static.portadafrente.com/PF34811/03_1727857344232.jpg"
},
{
"main_photo": false,
"sequence": 4,
"url": "https://static.portadafrente.com/PF34811/04_1727857344232.jpg"
},
{
"main_photo": false,
"sequence": 5,
"url": "https://static.portadafrente.com/PF34811/05_1727857344233.jpg"
},
{
"main_photo": false,
"sequence": 6,
"url": "https://static.portadafrente.com/PF34811/06_1727857344233.jpg"
},
{
"main_photo": false,
"sequence": 7,
"url": "https://static.portadafrente.com/PF34811/07_1727857344234.jpg"
},
{
"main_photo": false,
"sequence": 8,
"url": "https://static.portadafrente.com/PF34811/08_1727857344234.jpg"
},
{
"main_photo": false,
"sequence": 9,
"url": "https://static.portadafrente.com/PF34811/09_1727857344235.jpg"
},
{
"main_photo": false,
"sequence": 10,
"url": "https://static.portadafrente.com/PF34811/10_1727857344236.jpg"
},
{
"main_photo": false,
"sequence": 11,
"url": "https://static.portadafrente.com/PF34811/11_1727857344237.jpg"
},
{
"main_photo": false,
"sequence": 12,
"url": "https://static.portadafrente.com/PF34811/12_1727857344240.jpg"
},
{
"main_photo": false,
"sequence": 13,
"url": "https://static.portadafrente.com/PF34811/13_1727857344241.jpg"
},
{
"main_photo": false,
"sequence": 14,
"url": "https://static.portadafrente.com/PF34811/14_1727857344241.jpg"
},
{
"main_photo": false,
"sequence": 15,
"url": "https://static.portadafrente.com/PF34811/15_1727857344241.jpg"
},
{
"main_photo": false,
"sequence": 16,
"url": "https://static.portadafrente.com/PF34811/16_1727857344242.jpg"
},
{
"main_photo": false,
"sequence": 17,
"url": "https://static.portadafrente.com/PF34811/17_1727857344242.jpg"
},
{
"main_photo": false,
"sequence": 18,
"url": "https://static.portadafrente.com/PF34811/18_1727857344243.jpg"
},
{
"main_photo": false,
"sequence": 19,
"url": "https://static.portadafrente.com/PF34811/19_1727857344243.jpg"
},
{
"main_photo": false,
"sequence": 20,
"url": "https://static.portadafrente.com/PF34811/20_1727857344243.jpg"
},
{
"main_photo": false,
"sequence": 21,
"url": "https://static.portadafrente.com/PF34811/21_1727857344244.jpg"
},
{
"main_photo": false,
"sequence": 22,
"url": "https://static.portadafrente.com/PF34811/22_1727857344244.jpg"
},
{
"main_photo": false,
"sequence": 23,
"url": "https://static.portadafrente.com/PF34811/23_1727857344244.jpg"
},
{
"main_photo": false,
"sequence": 24,
"url": "https://static.portadafrente.com/PF34811/24_1727857344245.jpg"
},
{
"main_photo": false,
"sequence": 25,
"url": "https://static.portadafrente.com/PF34811/25_1727857344245.jpg"
},
{
"main_photo": false,
"sequence": 26,
"url": "https://static.portadafrente.com/PF34811/26_1727857344245.jpg"
},
{
"main_photo": false,
"sequence": 27,
"url": "https://static.portadafrente.com/PF34811/27_1727857344246.jpg"
},
{
"main_photo": false,
"sequence": 28,
"url": "https://static.portadafrente.com/PF34811/28_1727857344246.jpg"
},
{
"main_photo": false,
"sequence": 29,
"url": "https://static.portadafrente.com/PF34811/29_1727857344247.jpg"
},
{
"main_photo": false,
"sequence": 30,
"url": "https://static.portadafrente.com/PF34811/30_1727857344247.jpg"
},
{
"main_photo": false,
"sequence": 31,
"url": "https://static.portadafrente.com/PF34811/31_1727857344247.jpg"
},
{
"main_photo": false,
"sequence": 32,
"url": "https://static.portadafrente.com/PF34811/32_1727857344248.jpg"
},
{
"main_photo": false,
"sequence": 33,
"url": "https://static.portadafrente.com/PF34811/33_1727857344248.jpg"
},
{
"main_photo": false,
"sequence": 34,
"url": "https://static.portadafrente.com/PF34811/34_1727857344249.jpg"
},
{
"main_photo": false,
"sequence": 35,
"url": "https://static.portadafrente.com/PF34811/35_1727857344249.jpg"
},
{
"main_photo": false,
"sequence": 36,
"url": "https://static.portadafrente.com/PF34811/36_1727857344250.jpg"
},
{
"main_photo": false,
"sequence": 37,
"url": "https://static.portadafrente.com/PF34811/37_1727857344250.jpg"
},
{
"main_photo": false,
"sequence": 38,
"url": "https://static.portadafrente.com/PF34811/38_1727857344251.jpg"
},
{
"main_photo": false,
"sequence": 39,
"url": "https://static.portadafrente.com/PF34811/39_1727857344251.jpg"
},
{
"main_photo": false,
"sequence": 40,
"url": "https://static.portadafrente.com/PF34811/40_1727857344252.jpg"
},
{
"main_photo": false,
"sequence": 41,
"url": "https://static.portadafrente.com/PF34811/41_1727857344252.jpg"
},
{
"main_photo": true,
"sequence": 42,
"url": "https://static.portadafrente.com/PF34811/42_1727857344254.jpg"
},
{
"main_photo": false,
"sequence": 43,
"url": "https://static.portadafrente.com/PF34811/43_1727857344256.jpg"
},
{
"main_photo": false,
"sequence": 44,
"url": "https://static.portadafrente.com/PF34811/44_1727857344256.jpg"
},
{
"main_photo": false,
"sequence": 45,
"url": "https://static.portadafrente.com/PF34811/45_1727857344257.jpg"
},
{
"main_photo": false,
"sequence": 46,
"url": "https://static.portadafrente.com/PF34811/PLANTA_1727857697100.JPG"
}
],
"postal_code": "1500-458",
"price": 1100000,
"price_on_application": false,
"published_at": "2024-10-03",
"rooms": 5,
"slug_url": "penthouse-t5-no-alto-dos-moinhos-venda-a0cTg000003ZTgXIAW",
"slug_url_en": "5-bedroom-apartment-lisboa-sale-a0cTg000003ZTgXIAW",
"slug_url_fr": "appartement-6-pieces-lisboa-vente-a0cTg000003ZTgXIAW",
"state_id": "used",
"sub_category_id": "apartamento",
"sub_category_name": "Apartamento",
"surroundings": [
"Áreas de Lazer Infantil",
"Banco",
"Centro Comercial",
"Escola",
"Espaços Verdes",
"Farmácia",
"Ginásio",
"Hospital",
"Praça Táxis",
"Transportes Públicos"
],
"surroundings_en": [
"Children's play areas",
"Bank",
"Shopping center",
"School",
"Green spaces",
"Pharmacy",
"Gym",
"Hospital",
"Taxis Square",
"Public Transportation"
],
"surroundings_fr": [
"Aires de jeux pour enfants",
"Banque",
"Centre commercial",
"École",
"Espaces verts",
"Pharmacie",
"Gym",
"Hôpital",
"Taxis Square",
"Transport public"
],
"title": "Penthouse T5 no Alto dos Moinhos",
"title_en": "5 Bedroom Apartment, Lisboa",
"title_fr": "Appartement 6 pièces, Lisboa",
"zone": "Alto dos Moinhos",
"zone_id": "lisboa-alto-dos-moinhos"
},
"highlight": {},
"highlights": [],
"text_match": 100,
"text_match_info": {
"best_field_score": "0",
"best_field_weight": 12,
"fields_matched": 4,
"num_tokens_dropped": 1,
"score": "100",
"tokens_matched": 0,
"typo_prefix_score": 255
}
}
{
"document": {
"address": "Native. | Alameda Sr. da Serra",
"availability_ids": "disponivel",
"bathrooms": 0,
"business_type_id": "sale",
"category_id": "development",
"category_name": "Empreendimento",
"category_name_en": "Development",
"category_name_fr": "Complexes immobiliers",
"code": "PF30385",
"county": "Lisboa",
"county_id": "lisboa",
"cover_photo": "https://static.portadafrente.com/PF30385/2_1687951708875.png",
"description": "Native é a escolha natural para quem deseja mais espaço, conseguindo o equilíbrio perfeito entre espaços verdes e modernidade. Localizado no Belas Clube de Campo, junto a Lisboa, Oeiras e Cascais, é o destino perfeito para que a sua família viva em plena natureza, mas perto de tudo. • 20 minutos. do centro de Lisboa • 20 minutos das praias da Linha de Cascais • 15 minutos do Parque das Nações À porta de sua casa encontra a floresta, uma escola preparada para o futuro, o campo de golfe e os campos de padel, a piscina, o healthclub, um co-working, os melhores sabores da gastronomia e todos os serviços. Porque a educação, a saúde, a inspiração e o entretenimento da sua família são naturais do campo. Mesmo à porta da cidade. >> Jardim-Escola João de Deus de Belas Uma escola multilingue, multicultural e aberta ao mundo. Do berçário ao 6º ano, mesmo no Belas Clube de Campo. Para que os seus filhos possam caminhar a pé até à escola, em total segurança. >> Trilhos, Golfe e Padel Em plena natureza, encontra tudo para que se mantenha ativo: das caminhadas na floresta ao campo de golfe, passando pelos campos de padel. >> Restaurante e Café No restaurante do clubhouse encontra os sabores portugueses revisitados para um almoço em família ou um jantar de amigos. O café no campo convida a pequenos-almoços e lanches sem hora marcada. >> Hub: um espaço de partilha para todos → Co-working entre a natureza e a tecnologia; → Ponto pick & collect para encomendas online; → Kids’ club para muita animação; → Co-kitchen para partilhar sabores; → Ginásio; → Sala multiusos. A NATUREZA DA SUA FAMÍLIA INSPIRA A ENERGIA DA SUA CASA :: APARTAMENTOS T1 A T4 :: ORION & SOUL Inseridos entre áreas verdes e todos os serviços de que precisa. Com espaço para fazer o seu homeoffice, as amplas janelas convidam a luz a entrar, para viver em pleno. O edifício é leve e delicado, com linhas modernas e tons ligados à paisagem. Os apartamentos dispõem da máxima otimização do espaço, reduzindo as áreas de circulação, mas mantendo a diferenciação entre as zonas de dia e de noite e criando muita arrumação. :: TOWNHOUSES T4 Design contemporâneo, piscina e muita luz natural marcam o novo espaço para a sua família viver e crescer com a natureza e a cidade mesmo à porta de casa. Com uma linguagem delicada, contemporânea e intemporal de linhas claras e tons ligados à paisagem, cada townhouse convida à permanência e ao refúgio. :: PLOTS / LOTES A sua família é única e merece uma casa única. Escolha o seu lote e transforme os seus sonhos em realidade numa casa totalmente pensada e desenvolvida à sua medida. Comercialização Exclusiva: Porta da Frente Christie’s Promoção: Kronos Projeto de arquitetura: Capinha Lopes e Miguel Saraiva",
"description_en": "Native is the natural choice for those who want more space, achieving the perfect balance between green spaces and modernity. Located in Belas Clube de Campo, near Lisbon, Oeiras and Cascais, it is the perfect destination for your family to live in the midst of nature, but close to everything. \r\n \r\n- 20 minutes from the centre of Lisbon\r\n- 20 minutes from the beaches of the Cascais line\r\n- 15 minutes from Parque das Nações\r\n \r\nAt your doorstep you will find the forest, a school prepared for the future, the golf and paddle tennis courts, the swimming pool, the healthclub, co-working, the best flavours of gastronomy and all the services. Because your family's education, health, inspiration and entertainment come naturally from the countryside. Right on the city's doorstep. \r\n \r\n>> João de Deus de Belas Nursery School \r\n \r\nA multilingual, multicultural school, open to the world. From nursery to sixth grade, right in Belas Clube de Campo. So that your children can walk to school in complete safety. \r\n \r\n>> Trails, Golf and Padel \r\n \r\nIn the middle of nature, you will find everything to keep you active: from walks in the forest to the golf course, as well as paddle tennis courts.\r\n \r\n>> Restaurant and Café \r\n \r\nIn the clubhouse restaurant you will find Portuguese flavours revisited for a family lunch or a dinner with friends. The café on the course invites you to breakfasts and snacks without an appointment. \r\n \r\n>> Hub: a sharing space for everyone\r\n \r\n→ Co-working between nature and technology; \r\n→ Pick & collect point for online ordering; \r\n→ Kids' club for lots of entertainment; \r\n→ Co-kitchen for sharing flavours; \r\n→ Gymnasium; \r\n→ Multi-purpose room. \r\n \r\nTHE NATURE OF YOUR FAMILY INSPIRES THE ENERGY OF YOUR HOME\r\n \r\n:: FLATS 1 TO 4 BEDROOMS :: ORION & SOUL\r\n \r\nInserted between green areas and all the services you need. With space for your home office, the large windows invite the light to come in, to live in full. The building is light and delicate, with modern lines and tones linked to the landscape. The flats have the maximum optimization of space, reducing the circulation areas, but maintaining the differentiation between day and night zones and creating plenty of storage.\r\n \r\n:: TOWNHOUSES T4\r\n \r\nContemporary design, swimming pool and plenty of natural light mark the new space for your family to live and grow with nature and the city on your doorstep. With a delicate, contemporary and timeless language of clear lines and tones linked to the landscape, each townhouse invites you to stay and take refuge. \r\n \r\n:: PLOTS / LOTS\r\n \r\nYour family is unique and deserves a unique home. Choose your plot and make your dreams come true in a house totally designed and developed to your measure. \r\n \r\nExclusive Marketing: Porta da Frente Christie's \r\nDevelopment: Kronos\r\nArchitecture Project: Capinha Lopes e Miguel Saraiva",
"description_fr": "Native est le choix naturel pour ceux qui veulent plus d'espace, atteignant l'équilibre parfait entre les espaces verts et la modernité. Situé à Belas Clube de Campo, près de Lisbonne, Oeiras et Cascais, c'est la destination idéale pour votre famille qui souhaite vivre en pleine nature, mais à proximité de tout. \r\n \r\n- 20 minutes du centre de Lisbonne\r\n- 20 minutes des plages de la ligne de Cascais\r\n- 15 minutes du Parque das Nações\r\n \r\nÀ votre porte, vous trouverez la forêt, une école préparée pour l'avenir, les terrains de golf et de paddle, la piscine, le club de santé, le co-working, les meilleures saveurs de la gastronomie et tous les services. Parce que l'éducation, la santé, l'inspiration et le divertissement de votre famille viennent naturellement de la campagne. Aux portes de la ville. \r\n \r\n>> École maternelle João de Deus de Belas \r\n \r\nUne école multilingue et multiculturelle, ouverte sur le monde. De la maternelle à la sixième année, à Belas Clube de Campo. Pour que vos enfants puissent se rendre à l'école à pied en toute sécurité. \r\n \r\n>> Sentiers, golf et padel \r\n \r\nEn pleine nature, vous trouverez tout ce qu'il faut pour rester actif : des promenades en forêt au terrain de golf, en passant par les courts de padel.\r\n \r\n>> Restaurant et café \r\n \r\nDans le restaurant du clubhouse, vous trouverez des saveurs portugaises revisitées pour un déjeuner en famille ou un dîner entre amis. Le café sur le parcours vous invite à des petits déjeuners et des goûters sans rendez-vous. \r\n \r\n>> Hub : un espace de partage pour tous\r\n \r\n→ Co-working entre nature et technologie ; \r\n→ Point de retrait pour les commandes en ligne ; \r\n→ Club pour enfants avec de nombreux divertissements ; \r\n→ Co-cuisine pour partager les saveurs ; \r\n→ Gymnase ; \r\n→ Salle polyvalente. \r\n \r\nLA NATURE DE VOTRE FAMILLE INSPIRE L'ÉNERGIE DE VOTRE MAISON\r\n \r\n: : APPARTEMENTS DE 1 À 4 CHAMBRES : : ORION & SOUL\r\n \r\nInsérés entre des espaces verts et tous les services dont vous avez besoin. Avec de l'espace pour votre bureau à domicile, les grandes fenêtres invitent la lumière à entrer, à vivre pleinement. Le bâtiment est léger et délicat, avec des lignes modernes et des tons liés au paysage. Les appartements optimisent au maximum l'espace, en réduisant les zones de circulation, mais en maintenant la différenciation entre les zones de jour et de nuit et en créant de nombreux espaces de rangement.\r\n \r\nT4 : MAISONS DE VILLE\r\n \r\nUn design contemporain, une piscine et beaucoup de lumière naturelle marquent le nouvel espace où votre famille peut vivre et grandir avec la nature et la ville à votre porte. Avec un langage délicat, contemporain et intemporel de lignes claires et de tons liés au paysage, chaque maison de ville vous invite à rester et à vous réfugier. \r\n \r\n: : PARCELLES / LOTS\r\n \r\nVotre famille est unique et mérite une maison unique. Choisissez votre terrain et réalisez vos rêves dans une maison entièrement conçue et développée à votre mesure. \r\n \r\nCommercialisation exclusive : Porta da Frente Christie's \r\nDéveloppement : Kronos\r\nProjet d'architecture : Capinha Lopes e Miguel Saraiva",
"equipments": [
"Banheira",
"Cozinha Equipada",
"Domótica",
"Elevador",
"Esquentador",
"Exaustor",
"Fogão",
"Forno",
"Frigorífico",
"Garagem",
"Isolamento Acústico",
"Isolamento Térmico",
"Jardim",
"Máquina de Lavar Louça",
"Máquina de Lavar Roupa",
"Piscina Privada",
"Piso Radiante",
"Placa Vitrocerâmica",
"Porta Alta Segurança",
"Portão Eléctrico",
"Pré-instalação ar condicionado",
"Pré-instalação de aquecimento central",
"Roupeiros",
"Terraço",
"Video Porteiro",
"Vidros Duplos",
"Microondas",
"Varanda"
],
"equipments_en": [
"Bathtub",
"Equipped kitchen",
"Home automation",
"Elevator",
"Water Heater",
"Exhaust",
"Stove",
"Oven",
"Fridge",
"Garage",
"Acoustic Insulation",
"Thermal Insulation",
"Garden",
"Dishwasher",
"Washing Machine",
"Private Swimming Pool",
"Radiant Floor Heating",
"Vitroceramic Cooktop",
"High Security Door",
"Electric gate",
"Pre-installation for air conditioning",
"Pre-installed central heating system",
"Wardrobes",
"Terrace",
"Video Doorman",
"Double Glazed",
"Microwave Oven",
"Balcony"
],
"equipments_fr": [
"Baignoire",
"Cuisine équipée",
"Automatisation de la maison",
"Ascenseur",
"Chauffe-eau",
"Échappement",
"Le fourneau",
"Four",
"Frigo",
"Garage",
"Isolation sonore",
"Isolation thermique",
"Jardin",
"Lave-vaisselle",
"Machine à laver",
"Piscine privée",
"Chauffage radiant au sol",
"Table de cuisson vitrocéramique",
"Porte haute sécurité",
"Portail électrique",
"Pré-installation pour la climatisation",
"Système de chauffage central préinstallé",
"Armoires",
"Terrasse",
"Portier vidéo",
"Double vitrage",
"Micro-ondes",
"Balcon"
],
"floor": null,
"fraction": "",
"id": "a0c3Y00000WOcoVQAT",
"is_exclusive": true,
"land_area": 0,
"languages": [
"pt"
],
"last_updated": "2024-12-19T20:10:36.389Z",
"latitude": 38.81251632,
"longitude": -9.2779875,
"parish_id": "",
"parking_spaces": 0,
"photos": [
{
"main_photo": true,
"sequence": 1,
"url": "https://static.portadafrente.com/PF30385/2_1687951708875.png"
},
{
"main_photo": false,
"sequence": 2,
"url": "https://static.portadafrente.com/PF30385/36_1687951708870.png"
},
{
"main_photo": false,
"sequence": 3,
"url": "https://static.portadafrente.com/PF30385/6_1687951708887.png"
},
{
"main_photo": false,
"sequence": 4,
"url": "https://static.portadafrente.com/PF30385/22_1687951708900.png"
},
{
"main_photo": false,
"sequence": 5,
"url": "https://static.portadafrente.com/PF30385/34_1687951708869.png"
},
{
"main_photo": false,
"sequence": 6,
"url": "https://static.portadafrente.com/PF30385/1_1687951708874.png"
},
{
"main_photo": false,
"sequence": 7,
"url": "https://static.portadafrente.com/PF30385/35_1687951708869.png"
},
{
"main_photo": false,
"sequence": 8,
"url": "https://static.portadafrente.com/PF30385/33_1687951708867.png"
},
{
"main_photo": false,
"sequence": 9,
"url": "https://static.portadafrente.com/PF30385/7_1687951708888.png"
},
{
"main_photo": false,
"sequence": 10,
"url": "https://static.portadafrente.com/PF30385/37_1687951708871.png"
},
{
"main_photo": false,
"sequence": 11,
"url": "https://static.portadafrente.com/PF30385/38_1687951708872.png"
},
{
"main_photo": false,
"sequence": 12,
"url": "https://static.portadafrente.com/PF30385/39_1687951708872.png"
},
{
"main_photo": false,
"sequence": 13,
"url": "https://static.portadafrente.com/PF30385/3_1687951708876.png"
},
{
"main_photo": false,
"sequence": 14,
"url": "https://static.portadafrente.com/PF30385/5_1687951708882.png"
},
{
"main_photo": false,
"sequence": 15,
"url": "https://static.portadafrente.com/PF30385/9_1687951708888.png"
},
{
"main_photo": false,
"sequence": 16,
"url": "https://static.portadafrente.com/PF30385/15_1687951708895.png"
},
{
"main_photo": false,
"sequence": 17,
"url": "https://static.portadafrente.com/PF30385/10_1687951708888.png"
},
{
"main_photo": false,
"sequence": 18,
"url": "https://static.portadafrente.com/PF30385/18_1687951708899.png"
},
{
"main_photo": false,
"sequence": 19,
"url": "https://static.portadafrente.com/PF30385/11_1687951708889.png"
},
{
"main_photo": false,
"sequence": 20,
"url": "https://static.portadafrente.com/PF30385/17_1687951708898.png"
},
{
"main_photo": false,
"sequence": 21,
"url": "https://static.portadafrente.com/PF30385/21_1687951708900.png"
},
{
"main_photo": false,
"sequence": 22,
"url": "https://static.portadafrente.com/PF30385/16_1687951708896.png"
},
{
"main_photo": false,
"sequence": 23,
"url": "https://static.portadafrente.com/PF30385/19_1687951708900.png"
},
{
"main_photo": false,
"sequence": 24,
"url": "https://static.portadafrente.com/PF30385/32_1687951708907.png"
},
{
"main_photo": false,
"sequence": 25,
"url": "https://static.portadafrente.com/PF30385/23_1687951708900.png"
},
{
"main_photo": false,
"sequence": 26,
"url": "https://static.portadafrente.com/PF30385/24_1687951708901.png"
},
{
"main_photo": false,
"sequence": 27,
"url": "https://static.portadafrente.com/PF30385/25_1687951708901.png"
},
{
"main_photo": false,
"sequence": 28,
"url": "https://static.portadafrente.com/PF30385/29_1687951708901.png"
},
{
"main_photo": false,
"sequence": 29,
"url": "https://static.portadafrente.com/PF30385/26_1687951708901.png"
},
{
"main_photo": false,
"sequence": 30,
"url": "https://static.portadafrente.com/PF30385/27_1687951708901.png"
},
{
"main_photo": false,
"sequence": 31,
"url": "https://static.portadafrente.com/PF30385/40_1687951708873.png"
},
{
"main_photo": false,
"sequence": 32,
"url": "https://static.portadafrente.com/PF30385/28_1687951708901.png"
},
{
"main_photo": false,
"sequence": 33,
"url": "https://static.portadafrente.com/PF30385/30_1687951708905.png"
},
{
"main_photo": false,
"sequence": 34,
"url": "https://static.portadafrente.com/PF30385/31_1687951708906.png"
},
{
"main_photo": false,
"sequence": 35,
"url": "https://static.portadafrente.com/PF30385/4_1687951708876.png"
},
{
"main_photo": false,
"sequence": 36,
"url": "https://static.portadafrente.com/PF30385/8_1687951708888.png"
},
{
"main_photo": false,
"sequence": 37,
"url": "https://static.portadafrente.com/PF30385/12_1687951708889.png"
},
{
"main_photo": false,
"sequence": 38,
"url": "https://static.portadafrente.com/PF30385/13_1687951708890.png"
},
{
"main_photo": false,
"sequence": 39,
"url": "https://static.portadafrente.com/PF30385/14_1687951708893.png"
},
{
"main_photo": false,
"sequence": 40,
"url": "https://static.portadafrente.com/PF30385/20_1687951708900.png"
},
{
"main_photo": false,
"sequence": 41,
"url": "https://static.portadafrente.com/PF30385/Belas_edit_V4_C07-Editar_1722274086688.jpg"
},
{
"main_photo": false,
"sequence": 42,
"url": "https://static.portadafrente.com/PF30385/V20_LOT%2013%20suite_1722274134932.jpg"
},
{
"main_photo": false,
"sequence": 43,
"url": "https://static.portadafrente.com/PF30385/V14_Sala%2001_1722274134933.jpg"
},
{
"main_photo": false,
"sequence": 44,
"url": "https://static.portadafrente.com/PF30385/V15_Sala%2001_1722274134934.jpg"
},
{
"main_photo": false,
"sequence": 45,
"url": "https://static.portadafrente.com/PF30385/V16_LOT%2013%20CUCINA_1722274134935.jpg"
},
{
"main_photo": false,
"sequence": 46,
"url": "https://static.portadafrente.com/PF30385/V17_LOT%2013%20CUCINA%202_1722274134936.jpg"
},
{
"main_photo": false,
"sequence": 47,
"url": "https://static.portadafrente.com/PF30385/V18_LOT%2013-BATH_VB_1722274134936.jpg"
}
],
"postal_code": "2605-193",
"price": 0,
"price_on_application": false,
"published_at": "2023-05-03",
"rooms": 0,
"slug_url": "native-a0c3Y00000WOcoVQAT",
"slug_url_en": "native-a0c3Y00000WOcoVQAT",
"slug_url_fr": "native-a0c3Y00000WOcoVQAT",
"state_id": "under-construction",
"surroundings": [
"Aeroporto",
"Áreas de Lazer Infantil",
"Auto-Estrada",
"Bombeiros",
"Campo de Golfe",
"Centro Comercial",
"Centro da Cidade",
"Escola",
"Espaços Verdes",
"Farmácia",
"Ginásio",
"Hipermercado",
"Hospital",
"Mercado",
"Orientação Solar Nascente",
"Orientação Solar Norte",
"Orientação Solar Poente",
"Orientação Solar Sul",
"Vista para Campo",
"Vista para Campo de Golfe",
"Vista para Jardim",
"Vista para Montanha",
"Estacionamento"
],
"surroundings_en": [
"Airport",
"Children's play areas",
"Freeway",
"Fire department",
"Golf course",
"Shopping center",
"Town centre",
"School",
"Green spaces",
"Pharmacy",
"Gym",
"Hypermarket",
"Hospital",
"Mart",
"Rising Solar Orientation",
"Solar Orientation North",
"Solar Orientation West",
"Solar Orientation South",
"View to Countryside",
"Golf Course View",
"Garden View",
"Mountain View",
"Parking"
],
"surroundings_fr": [
"Aéroport",
"Aires de jeux pour enfants",
"Autoroute",
"Pompiers",
"Terrain de golf",
"Centre commercial",
"Centre-ville",
"École",
"Espaces verts",
"Pharmacie",
"Gym",
"grande surface",
"Hôpital",
"Marché",
"Orientation solaire croissante",
"Orientation solaire Nord",
"Orientation solaire Ouest",
"Orientation solaire Sud",
"Vue sur la campagne",
"Vue du terrain de golf",
"Vue du jardin",
"Vue sur la montagne",
"Parking"
],
"title": "Native.",
"title_en": "Native.",
"title_fr": "Native.",
"zone": "Belas Clube de Campo",
"zone_id": "lisboa-belas-clube-de-campo"
},
"highlight": {},
"highlights": [],
"text_match": 100,
"text_match_info": {
"best_field_score": "0",
"best_field_weight": 12,
"fields_matched": 4,
"num_tokens_dropped": 1,
"score": "100",
"tokens_matched": 0,
"typo_prefix_score": 255
}
}
{
"document": {
"address": "Comissão: Prestação de serviços imobiliários do imóvel sito no Native – Belas Clube de Campo – Avenida André Jordan Nº22, Lote 101 (50% CPCV – realizado a 04/12/2024)",
"availability_ids": "reservado-visivel-no-site",
"bathrooms": 0,
"business_type_id": "sale",
"category_id": "land",
"category_name": "Terreno",
"category_name_en": "Land",
"category_name_fr": "Terrain",
"code": "PF33900",
"county": "Lisboa",
"county_id": "lisboa",
"cover_photo": "https://static.portadafrente.com/PF30385/28_1687951708901.png",
"description": "Native é a escolha natural para quem deseja mais espaço, conseguindo o equilíbrio perfeito entre espaços verdes e modernidade. Localizado no Belas Clube de Campo, junto a Lisboa, Oeiras e Cascais, é o destino perfeito para que a sua família viva em plena natureza, mas perto de tudo. • 20 minutos. do centro de Lisboa • 20 minutos das praias da Linha de Cascais • 15 minutos do Parque das Nações À porta de sua casa encontra a floresta, uma escola preparada para o futuro, o campo de golfe e os campos de padel, a piscina, o healthclub, um co-working, os melhores sabores da gastronomia e todos os serviços. Porque a educação, a saúde, a inspiração e o entretenimento da sua família são naturais do campo. Mesmo à porta da cidade. >> Jardim-Escola João de Deus de Belas Uma escola multilingue, multicultural e aberta ao mundo. Do berçário ao 6º ano, mesmo no Belas Clube de Campo. Para que os seus filhos possam caminhar a pé até à escola, em total segurança. >> Trilhos, Golfe e Padel Em plena natureza, encontra tudo para que se mantenha ativo: das caminhadas na floresta ao campo de golfe, passando pelos campos de padel. >> Restaurante e Café No restaurante do clubhouse encontra os sabores portugueses revisitados para um almoço em família ou um jantar de amigos. O café no campo convida a pequenos-almoços e lanches sem hora marcada. >> Hub: um espaço de partilha para todos → Co-working entre a natureza e a tecnologia; → Ponto pick & collect para encomendas online; → Kids’ club para muita animação; → Co-kitchen para partilhar sabores; → Ginásio; → Sala multiusos. A NATUREZA DA SUA FAMÍLIA INSPIRA A ENERGIA DA SUA CASA :: APARTAMENTOS T1 A T4 :: ORION & SOUL Inseridos entre áreas verdes e todos os serviços de que precisa. Com espaço para fazer o seu homeoffice, as amplas janelas convidam a luz a entrar, para viver em pleno. O edifício é leve e delicado, com linhas modernas e tons ligados à paisagem. Os apartamentos dispõem da máxima otimização do espaço, reduzindo as áreas de circulação, mas mantendo a diferenciação entre as zonas de dia e de noite e criando muita arrumação. :: TOWNHOUSES T4 Design contemporâneo, piscina e muita luz natural marcam o novo espaço para a sua família viver e crescer com a natureza e a cidade mesmo à porta de casa. Com uma linguagem delicada, contemporânea e intemporal de linhas claras e tons ligados à paisagem, cada townhouse convida à permanência e ao refúgio. :: PLOTS / LOTES A sua família é única e merece uma casa única. Escolha o seu lote e transforme os seus sonhos em realidade numa casa totalmente pensada e desenvolvida à sua medida. Comercialização Exclusiva: Porta da Frente Christie’s Promoção: Kronos Projeto de arquitetura: Capinha Lopes e Miguel Saraiva",
"description_en": "Native is the natural choice for those who want more space, achieving the perfect balance between green spaces and modernity. Located in Belas Clube de Campo, near Lisbon, Oeiras and Cascais, it is the perfect destination for your family to live in the midst of nature, but close to everything. \r\n \r\n- 20 minutes from the centre of Lisbon\r\n- 20 minutes from the beaches of the Cascais line\r\n- 15 minutes from Parque das Nações\r\n \r\nAt your doorstep you will find the forest, a school prepared for the future, the golf and paddle tennis courts, the swimming pool, the healthclub, co-working, the best flavours of gastronomy and all the services. Because your family's education, health, inspiration and entertainment come naturally from the countryside. Right on the city's doorstep. \r\n \r\n>> João de Deus de Belas Nursery School \r\n \r\nA multilingual, multicultural school, open to the world. From nursery to sixth grade, right in Belas Clube de Campo. So that your children can walk to school in complete safety. \r\n \r\n>> Trails, Golf and Padel \r\n \r\nIn the middle of nature, you will find everything to keep you active: from walks in the forest to the golf course, as well as paddle tennis courts.\r\n \r\n>> Restaurant and Café \r\n \r\nIn the clubhouse restaurant you will find Portuguese flavours revisited for a family lunch or a dinner with friends. The café on the course invites you to breakfasts and snacks without an appointment. \r\n \r\n>> Hub: a sharing space for everyone\r\n \r\n→ Co-working between nature and technology; \r\n→ Pick & collect point for online ordering; \r\n→ Kids' club for lots of entertainment; \r\n→ Co-kitchen for sharing flavours; \r\n→ Gymnasium; \r\n→ Multi-purpose room. \r\n \r\nTHE NATURE OF YOUR FAMILY INSPIRES THE ENERGY OF YOUR HOME\r\n \r\n:: FLATS 1 TO 4 BEDROOMS :: ORION & SOUL\r\n \r\nInserted between green areas and all the services you need. With space for your home office, the large windows invite the light to come in, to live in full. The building is light and delicate, with modern lines and tones linked to the landscape. The flats have the maximum optimization of space, reducing the circulation areas, but maintaining the differentiation between day and night zones and creating plenty of storage.\r\n \r\n:: TOWNHOUSES T4\r\n \r\nContemporary design, swimming pool and plenty of natural light mark the new space for your family to live and grow with nature and the city on your doorstep. With a delicate, contemporary and timeless language of clear lines and tones linked to the landscape, each townhouse invites you to stay and take refuge. \r\n \r\n:: PLOTS / LOTS\r\n \r\nYour family is unique and deserves a unique home. Choose your plot and make your dreams come true in a house totally designed and developed to your measure. \r\n \r\nExclusive Marketing: Porta da Frente Christie's \r\nDevelopment: Kronos\r\nArchitecture Project: Capinha Lopes e Miguel Saraiva",
"description_fr": "Native est le choix naturel pour ceux qui veulent plus d'espace, atteignant l'équilibre parfait entre les espaces verts et la modernité. Situé à Belas Clube de Campo, près de Lisbonne, Oeiras et Cascais, c'est la destination idéale pour votre famille qui souhaite vivre en pleine nature, mais à proximité de tout. \r\n \r\n- 20 minutes du centre de Lisbonne\r\n- 20 minutes des plages de la ligne de Cascais\r\n- 15 minutes du Parque das Nações\r\n \r\nÀ votre porte, vous trouverez la forêt, une école préparée pour l'avenir, les terrains de golf et de paddle, la piscine, le club de santé, le co-working, les meilleures saveurs de la gastronomie et tous les services. Parce que l'éducation, la santé, l'inspiration et le divertissement de votre famille viennent naturellement de la campagne. Aux portes de la ville. \r\n \r\n>> École maternelle João de Deus de Belas \r\n \r\nUne école multilingue et multiculturelle, ouverte sur le monde. De la maternelle à la sixième année, à Belas Clube de Campo. Pour que vos enfants puissent se rendre à l'école à pied en toute sécurité. \r\n \r\n>> Sentiers, golf et padel \r\n \r\nEn pleine nature, vous trouverez tout ce qu'il faut pour rester actif : des promenades en forêt au terrain de golf, en passant par les courts de padel.\r\n \r\n>> Restaurant et café \r\n \r\nDans le restaurant du clubhouse, vous trouverez des saveurs portugaises revisitées pour un déjeuner en famille ou un dîner entre amis. Le café sur le parcours vous invite à des petits déjeuners et des goûters sans rendez-vous. \r\n \r\n>> Hub : un espace de partage pour tous\r\n \r\n→ Co-working entre nature et technologie ; \r\n→ Point de retrait pour les commandes en ligne ; \r\n→ Club pour enfants avec de nombreux divertissements ; \r\n→ Co-cuisine pour partager les saveurs ; \r\n→ Gymnase ; \r\n→ Salle polyvalente. \r\n \r\nLA NATURE DE VOTRE FAMILLE INSPIRE L'ÉNERGIE DE VOTRE MAISON\r\n \r\n: : APPARTEMENTS DE 1 À 4 CHAMBRES : : ORION & SOUL\r\n \r\nInsérés entre des espaces verts et tous les services dont vous avez besoin. Avec de l'espace pour votre bureau à domicile, les grandes fenêtres invitent la lumière à entrer, à vivre pleinement. Le bâtiment est léger et délicat, avec des lignes modernes et des tons liés au paysage. Les appartements optimisent au maximum l'espace, en réduisant les zones de circulation, mais en maintenant la différenciation entre les zones de jour et de nuit et en créant de nombreux espaces de rangement.\r\n \r\nT4 : MAISONS DE VILLE\r\n \r\nUn design contemporain, une piscine et beaucoup de lumière naturelle marquent le nouvel espace où votre famille peut vivre et grandir avec la nature et la ville à votre porte. Avec un langage délicat, contemporain et intemporel de lignes claires et de tons liés au paysage, chaque maison de ville vous invite à rester et à vous réfugier. \r\n \r\n: : PARCELLES / LOTS\r\n \r\nVotre famille est unique et mérite une maison unique. Choisissez votre terrain et réalisez vos rêves dans une maison entièrement conçue et développée à votre mesure. \r\n \r\nCommercialisation exclusive : Porta da Frente Christie's \r\nDéveloppement : Kronos\r\nProjet d'architecture : Capinha Lopes e Miguel Saraiva",
"equipments": [],
"equipments_en": [],
"equipments_fr": [],
"floor": null,
"fraction": "Native Plot | 101",
"gross_private_area": 420.17,
"id": "a0cTg000001wXZJIA2",
"is_exclusive": true,
"land_area": 727.47,
"languages": [
"pt"
],
"last_updated": "2024-12-19T20:10:20.964Z",
"latitude": 38.81251632,
"longitude": -9.2779875,
"parent_property_id": "a0c3Y00000WOcoVQAT",
"parish_id": "",
"parking_spaces": 0,
"photos": [
{
"main_photo": true,
"sequence": 1,
"url": "https://static.portadafrente.com/PF30385/28_1687951708901.png"
},
{
"main_photo": false,
"sequence": 2,
"url": "https://static.portadafrente.com/PF30385/15_1687951708895.png"
},
{
"main_photo": false,
"sequence": 3,
"url": "https://static.portadafrente.com/PF30385/18_1687951708899.png"
},
{
"main_photo": false,
"sequence": 4,
"url": "https://static.portadafrente.com/PF30385/17_1687951708898.png"
},
{
"main_photo": false,
"sequence": 5,
"url": "https://static.portadafrente.com/PF30385/16_1687951708896.png"
},
{
"main_photo": false,
"sequence": 6,
"url": "https://static.portadafrente.com/PF30385/29_1687951708901.png"
},
{
"main_photo": false,
"sequence": 7,
"url": "https://static.portadafrente.com/PF30385/14_1687951708893.png"
},
{
"main_photo": false,
"sequence": 8,
"url": "https://static.portadafrente.com/PF30385/20_1687951708900.png"
}
],
"postal_code": "2605-193",
"price": 490000,
"price_on_application": false,
"published_at": "2024-05-27",
"rooms": 0,
"slug_url": "terreno-lisboa-venda-a0cTg000001wXZJIA2",
"slug_url_en": "land-lisboa-sale-a0cTg000001wXZJIA2",
"slug_url_fr": "terrain-lisboa-vente-a0cTg000001wXZJIA2",
"state_id": null,
"surroundings": [
"Aeroporto",
"Áreas de Lazer Infantil",
"Auto-Estrada",
"Bombeiros",
"Campo de Golfe",
"Centro Comercial",
"Centro da Cidade",
"Escola",
"Espaços Verdes",
"Farmácia",
"Ginásio",
"Hipermercado",
"Hospital",
"Mercado",
"Orientação Solar Nascente",
"Orientação Solar Norte",
"Orientação Solar Poente",
"Orientação Solar Sul",
"Vista para Campo",
"Vista para Campo de Golfe",
"Vista para Jardim",
"Vista para Montanha",
"Estacionamento"
],
"surroundings_en": [
"Airport",
"Children's play areas",
"Freeway",
"Fire department",
"Golf course",
"Shopping center",
"Town centre",
"School",
"Green spaces",
"Pharmacy",
"Gym",
"Hypermarket",
"Hospital",
"Mart",
"Rising Solar Orientation",
"Solar Orientation North",
"Solar Orientation West",
"Solar Orientation South",
"View to Countryside",
"Golf Course View",
"Garden View",
"Mountain View",
"Parking"
],
"surroundings_fr": [
"Aéroport",
"Aires de jeux pour enfants",
"Autoroute",
"Pompiers",
"Terrain de golf",
"Centre commercial",
"Centre-ville",
"École",
"Espaces verts",
"Pharmacie",
"Gym",
"grande surface",
"Hôpital",
"Marché",
"Orientation solaire croissante",
"Orientation solaire Nord",
"Orientation solaire Ouest",
"Orientation solaire Sud",
"Vue sur la campagne",
"Vue du terrain de golf",
"Vue du jardin",
"Vue sur la montagne",
"Parking"
],
"title": "Terreno, Lisboa",
"title_en": "Land, Lisboa",
"title_fr": "Terrain, Lisboa",
"zone": "Belas Clube de Campo",
"zone_id": "lisboa-belas-clube-de-campo"
},
"highlight": {},
"highlights": [],
"text_match": 100,
"text_match_info": {
"best_field_score": "0",
"best_field_weight": 12,
"fields_matched": 4,
"num_tokens_dropped": 1,
"score": "100",
"tokens_matched": 0,
"typo_prefix_score": 255
}
}
