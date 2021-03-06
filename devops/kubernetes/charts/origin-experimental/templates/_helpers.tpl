{{/*
Expand the name of the chart.
*/}}

{{- define "name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this
(by the DNS naming spec).
*/}}

{{- define "dshopBackendMainnet.fullname" -}}
{{- printf "%s-%s" .Release.Name "dshop-backend-mainnet" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{- define "dshopBackendRinkeby.fullname" -}}
{{- printf "%s-%s" .Release.Name "dshop-backend-rinkeby" | trunc 63 | trimSuffix "-" -}}
{{- end -}}
