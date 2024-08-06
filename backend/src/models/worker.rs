use chrono::DateTime;
use chrono::Utc;
use serde::Deserialize;
use serde::Serialize;
use uuid::Uuid;

#[derive(Serialize, Deserialize, Clone, Debug)]
pub enum WorkerStatus {
    READY,
    DOWN,
    UNKNOWN,
    PENDING,
    RUNNING,
}

#[derive(Serialize, Clone, Debug)]
pub struct Worker {
    pub id: Uuid,
    pub project_id: Option<Uuid>,
    pub status: WorkerStatus,
    pub current_task: Option<String>,
    pub hostname: String,
    pub created_at: DateTime<Utc>,
    pub updated_at: Option<DateTime<Utc>>,
    pub deleted_at: Option<DateTime<Utc>>,
}

#[derive(Deserialize, Debug, Default)]
pub struct UpdateWorker {
    pub project_id: Option<Uuid>,
    pub status: Option<WorkerStatus>,
    pub current_task: Option<String>,
    pub hostname: Option<String>,
}
