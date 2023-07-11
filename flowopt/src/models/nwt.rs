use serde::{Deserialize, Serialize};
use tpe::{density_estimation::ParzenEstimator, parzen_estimator, range, TpeOptimizer};

#[derive(Serialize, Deserialize)]
pub struct NWTParmas {
    pub id: i32,
    pub title: String,
    pub body: String,
    pub published: bool,
}

pub struct NWTOptions {
    pub id: TpeOptimizer,
    pub published: TpeOptimizer,
}

impl NWTOptions {
    pub fn new() -> Self {
        NWTOptions {
            id: TpeOptimizer::new(parzen_estimator(), range(-5.0, 5.0).unwrap()),
            published: TpeOptimizer::new(parzen_estimator(), range(-5.0, 5.0).unwrap()),
        }
    }
}
